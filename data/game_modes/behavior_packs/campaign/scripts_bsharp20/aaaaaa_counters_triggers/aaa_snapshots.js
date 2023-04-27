/* eslint-disable @typescript-eslint/no-unused-vars */

const GenericSnapshot = (nameFunc) => {
    return {
        GetSnapshotName: nameFunc,
        Take: function() {
            //go through all counters and take their snapshots
            for (const counter of AllCounters) {
                if (!counter.IsRestricted()) {
                    continue
                }

                // take snapshot for all permutations
                const inputPermutations = GetAllPermutations(counter.allowedInput)
                if (inputPermutations.length === 0) {
                    const GV = counter.GetGV()
                    const resultSnapshotName = this.GetSnapshotName() + "_" + GV
                    OUTPUT_SetGlobalVariable(resultSnapshotName, counter.Get())
                } else {
                    for (const permutation of inputPermutations) {
                        const GV = counter.GetGV(permutation)
                        const resultSnapshotName = this.GetSnapshotName() + "_" + GV
                        OUTPUT_SetGlobalVariable(resultSnapshotName, counter.Get(permutation))
                    }
                }
            }

            ProgressCampaign(TRIGGER_TIME_IMMEDIATE)
        },
        Get: function(counter, ...input) {
            input = GetRestParameter(input)

            const GV = counter.GetGV(input)
            const resultSnapshotName = this.GetSnapshotName() + "_" + GV
            if (QUERY_IsGlobalVariableSet(resultSnapshotName)) {
                const globalVal = counter.Get(input)
                const snapshotVal = QUERY_GetGlobalVariable(resultSnapshotName)
                return globalVal - snapshotVal
            } else {
                return SNAPSHOT_NOT_SET
            }
        },
        PatchSet: function(counter, value, ...input) {
            // This should only be used during patching, we never set values manually
            input = GetRestParameter(input)

            const GV = counter.GetGV(input)
            const resultSnapshotName = this.GetSnapshotName() + "_" + GV
            OUTPUT_SetGlobalVariable(resultSnapshotName, value)
        }
    }
}

// Special snapshots

// Select highest difference
const SNAPSHOT_OR = (snapshots) => {
    return {
        Get: function(counter, ...input) {
            input = GetRestParameter(input)

            let maxValue = -Number.MAX_VALUE
            for (const snapshot of snapshots) {
                const value = snapshot.Get(counter, input)
                if (value === SNAPSHOT_NOT_SET) {
                    continue
                }

                if (value > maxValue) {
                    maxValue = value
                }
            }

            if (maxValue === -Number.MAX_VALUE) {
                return SNAPSHOT_NOT_SET
            } else {
                return maxValue
            }
        }
    }
}

// Select lowest difference
const SNAPSHOT_AND = (snapshots) => {
    return {
        Get: function(counter, ...input) {
            input = GetRestParameter(input)

            let minValue = Number.MAX_VALUE
            for (const snapshot of snapshots) {
                const value = snapshot.Get(counter, input)
                if (value === SNAPSHOT_NOT_SET) {
                    return SNAPSHOT_NOT_SET
                }

                if (value < minValue) {
                    minValue = value
                }
            }

            if (minValue === Number.MAX_VALUE) {
                return SNAPSHOT_NOT_SET
            } else {
                return minValue
            }
        }
    }
}
