/* eslint-disable @typescript-eslint/no-unused-vars */

const HordeEstablishment = {
    gvCentralBaseId: function(horde) {
        return "gv_horde_central_base_" + horde
    },
    gvSizeCount: function(horde, size) {
        return "gv_horde_size_count_" + horde + "_" + size
    },
    gvDayEstablished: function(horde) {
        return "gv_horde_day_established_" + horde
    },
    gvPreGameRemaining: function(horde) {
        return "preGameRemaining" + horde
    },
    SetSizeCount: function(horde, size, count) {
        OUTPUT_SetGlobalVariable(this.gvSizeCount(horde, size), count)
    },
    GetSizeCount: function(horde, size) {
        return QUERY_GetGlobalVariable(this.gvSizeCount(horde, size))
    },
    DecrementSizeCount: function(horde, size) {
        if (this.IsEstablished(horde)) {
            Loge(`Decrementing size count for the horde ${horde} which already established. Check your logic.`)
            return
        }

        DecrementGlobal(this.gvSizeCount(horde, size))
        return this.GetSizeCount(horde, size)
    },
    IsEstablished: function(horde) {
        // If the horde hasn't entered yet, it cannot be established
        if (!HordeEntry.IsEntered(horde)) {
            return false
        }

        // It is a fair assumption that the bases will build only large, medium and small bases to establish
        const remainingSmall = this.GetSizeCount(horde, BASE_SIZE_SMALL)
        const remainingMedium = this.GetSizeCount(horde, BASE_SIZE_MEDIUM)
        const remainingLarge = this.GetSizeCount(horde, BASE_SIZE_LARGE)

        return remainingSmall === 0 && remainingMedium === 0 && remainingLarge === 0
    },
    IsCentralBaseEstablished: function(horde) {
        return QUERY_GetGlobalVariable(this.gvCentralBaseId(horde)) > 0
    },
    GetCentralBaseID: function(horde) {
        return QUERY_GetGlobalVariable(this.gvCentralBaseId(horde))
    },
    SetCentralBaseID: function(horde, vID) {
        OUTPUT_SetGlobalVariable(this.gvCentralBaseId(horde), vID)
    },
    GetPreGameRemaining: function(horde) {
        return QUERY_GetGlobalVariable(this.gvPreGameRemaining(horde))
    },
    SetPreGameRemaining: function(horde, preGameAmount) {
        OUTPUT_SetGlobalVariable(this.gvPreGameRemaining(horde), preGameAmount)
    },
    DecrementPreGameRemaining: function(horde) {
        DecrementGlobal(this.gvPreGameRemaining(horde))
    },
    GetHordes: function(established) {
        const hordes = []
        for (const horde of FACTION_PIGLINS) {
            if (this.IsEstablished(horde) === established) {
                hordes.push(horde)
            }
        }

        return hordes
    },
    GetNextBaseSizeToBuild: function(horde) {
        const remainingLarge = this.GetSizeCount(horde, BASE_SIZE_LARGE)
        if (remainingLarge > 0) {
            return BASE_SIZE_LARGE
        }

        const remainingMedium = this.GetSizeCount(horde, BASE_SIZE_MEDIUM)
        if (remainingMedium > 0) {
            return BASE_SIZE_MEDIUM
        }

        const remainingSmall = this.GetSizeCount(horde, BASE_SIZE_SMALL)
        if (remainingSmall > 0) {
            return BASE_SIZE_SMALL
        }

        return null
    }
}
