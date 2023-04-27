/* eslint-disable @typescript-eslint/no-unused-vars */

const StaggeredOrderedCollection = (gvName, allowedValues) => {
    return {
        gvEntered: function(unit) {
            return gvName + "_" + unit
        },
        gvOrder: function(orderNum) {
            return gvName + "_order_" + orderNum
        },
        randomGroup: function() {
            return gvName + "_random_group"
        },
        GetOrderValue: function(orderNum) {
            const GV = this.gvOrder(orderNum)
            if (!QUERY_IsGlobalVariableSet(GV)) {
                OUTPUT_SetGlobalVariable(GV, -1)
            }

            return QUERY_GetGlobalVariable(GV)
        },
        SetOrderValue: function(orderNum, unit) {
            const GV = this.gvOrder(orderNum)
            OUTPUT_SetGlobalVariable(GV, allowedValues.indexOf(unit))
        },
        AddNextInOrder: function(unit) {
            for (let i = 0; i < allowedValues.length; i++) {
                if (this.GetOrderValue(i) === -1) {
                    this.SetOrderValue(i, unit)
                    return
                }
            }
        },
        GetByArrivedOrder: function(orderNum) {
            if (orderNum < 0 || orderNum >= allowedValues.length) {
                return null
            }

            const unitIndex = this.GetOrderValue(orderNum)
            if (unitIndex === -1) {
                return null
            }

            return allowedValues[unitIndex]
        },
        GetOrderByName: function(unit) {
            const unitIndex = allowedValues.indexOf(unit)
            for (let i = 0; i < allowedValues.length; i++) {
                if (this.GetOrderValue(i) === unitIndex) {
                    return i
                }
            }

            return -1
        },
        IsEntered: function(horde) {
            return QUERY_GetGlobalVariable(this.gvEntered(horde)) === 1
        },
        SetEntered: function(horde, entered) {
            OUTPUT_SetGlobalVariable(this.gvEntered(horde), entered === true ? 1 : 0)

            if (entered) {
                this.AddNextInOrder(horde)
            }
        },
        GetRandomUnit: function(units, entered) {
            const resultUnits = []
            for (const unit of units) {
                if (this.IsEntered(unit) === entered) {
                    resultUnits.push(unit)
                }
            }

            if (resultUnits.length === 0) {
                return null
            }

            const index = QUERY_RandomNumberGroup(0, resultUnits.length - 1, this.randomGroup())
            return resultUnits[index]
        }
    }
}

const HordeEntry = StaggeredOrderedCollection("gv_horde_entry", HORDE_ANY)
const MobAllianceOccupation = StaggeredOrderedCollection("gv_mob_alliance_occupation", MOB_ALLIANCE_ANY)
