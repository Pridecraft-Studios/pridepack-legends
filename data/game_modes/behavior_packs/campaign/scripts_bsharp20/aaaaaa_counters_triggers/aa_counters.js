/* eslint-disable @typescript-eslint/no-unused-vars */

// This will contain all counters defined once script runs
const AllCounters = []

const GenericCounter = (gvName, defaultValue, ...allowedInput) => {
    const counter = {
        gv: gvName,
        allowedInput: allowedInput,
        inputSize: allowedInput.length,
        GetGV: function(...input) {
            input = GetRestParameter(input)

            if (this.inputSize !== input.length) {
                Loge(`Trying to supply different # of arguments for the counter ${this.gv} than expected. Revise your logic.`)
                return null
            }

            let resultGV = this.gv
            for (const elem of input) {
                resultGV += "_" + elem
            }

            return resultGV
        },
        Reset: function(...input) {
            input = GetRestParameter(input)

            const GV = this.GetGV(input)
            if (GV === null) {
                return
            }

            OUTPUT_SetGlobalVariable(GV, defaultValue)
        },
        Get: function(...input) {
            input = GetRestParameter(input)

            const GV = this.GetGV(input)
            if (GV === null) {
                return null
            }

            if (!QUERY_IsGlobalVariableSet(GV)) {
                this.Reset(input)
            }

            return QUERY_GetGlobalVariable(GV)
        },
        Increment: function(...input) {
            input = GetRestParameter(input)

            const GV = this.GetGV(input)
            if (GV === null) {
                return null
            }

            if (!QUERY_IsGlobalVariableSet(GV)) {
                this.Reset(input)
            }

            IncrementGlobal(GV)

            //Update progress
            ProgressCampaign(TRIGGER_TIME_IMMEDIATE)

            return this.Get(input)
        },
        Decrement: function(...input) {
            input = GetRestParameter(input)

            const GV = this.GetGV(input)
            if (GV === null) {
                return null
            }

            if (!QUERY_IsGlobalVariableSet(GV)) {
                this.Reset(input)
            }

            DecrementGlobal(GV)

            //Update progress
            ProgressCampaign(TRIGGER_TIME_IMMEDIATE)

            return this.Get(input)
        },
        Set: function(value, ...input) {
            input = GetRestParameter(input)

            const GV = this.GetGV(input)
            if (GV === null) {
                return null
            }

            if (!QUERY_IsGlobalVariableSet(GV)) {
                this.Reset(input)
            }

            OUTPUT_SetGlobalVariable(GV, value)

            //Update progress
            ProgressCampaign(TRIGGER_TIME_IMMEDIATE)

            return this.Get(input)
        },
        IsRestricted: function() {
            for (const allowedValues of this.allowedInput) {
                if (allowedValues.length === 0) {
                    return false
                }
            }

            return true
        }
    }

    // Counter is defined, append it to the array
    AllCounters.push(counter)
    return counter
}
