/* eslint-disable @typescript-eslint/no-unused-vars */

// Returns either original string or transformed string or null
const _ProcessTriggerInputString = (input) => {
    if (IsHordeInput(input)) {
        return GetHordeName(input)
    }

    if (IsMobAllianceInput(input)) {
        return GetMobAllianceName(input)
    }

    return input
}

// Returns array of VALID inputs, do not return null and etc.
const _ProcessTriggerInputArray = (arrayInput) => {
    const unpackedInput = []
    for (const input of arrayInput) {
        const result = _ProcessTriggerInputString(input)
        if (result !== null) {
            unpackedInput.push(result)
        }
    }
    return unpackedInput
}

// We need to convert input to the proper format so it can be used by get permutations
// input must be already an array of elements
// input is a list of inputs, so it would look like one if these
// [ [horde1, horde3], [size1, size2] ]
// [ horde1, [size1, size2] ]
// [ horde1, size1 ]
// Result is an array of arrays of VALID inputs, so hordes and sizes only, for example, without orders and etc.
const _ProcessTriggerInputAll = (input) => {
    const result = []
    for (const inputElem of input) {
        if (Array.isArray(inputElem)) {
            result.push(_ProcessTriggerInputArray(inputElem))
            continue
        }

        const singleResult = _ProcessTriggerInputString(inputElem)
        if (singleResult !== null) {
            result.push([singleResult])
        }
    }

    return result
}

const GenericTrigger = (expectedNum, counter, snapshot, ...input) => {
    return {
        eval: function() {
            const unpackedInput = _ProcessTriggerInputAll(input)
            const permutations = GetAllPermutations(unpackedInput)

            let finalSum = 0
            let canEvaluate = false
            if (permutations.length === 0) {
                finalSum = snapshot.Get(counter)
                if (finalSum === SNAPSHOT_NOT_SET) {
                    return false
                }
                canEvaluate = true
            } else {
                for (const inputPermutation of permutations) {
                    const snapshotVal = snapshot.Get(counter, inputPermutation)
                    if (snapshotVal === SNAPSHOT_NOT_SET) {
                        continue
                    }
                    canEvaluate = true
                    finalSum += snapshot.Get(counter, inputPermutation)
                }
            }

            if (!canEvaluate) {
                return false
            } else {
                return finalSum >= expectedNum
            }
        }
    }
}

const TRIGGER_AND = (triggers) => {
    return {
        eval: function() {
            for (const trigger of triggers) {
                if (!trigger.eval()) {
                    return false
                }
            }

            return true
        }
    }
}

const TRIGGER_OR = (triggers) => {
    return {
        eval: function() {
            for (const trigger of triggers) {
                if (trigger.eval()) {
                    return true
                }
            }

            return false
        }
    }
}
