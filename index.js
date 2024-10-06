const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = batteryBatches.reduce(function(totalBatches, eachBatch){
    return eachBatch + totalBatches
    }
  )

  console.log(totalBatteries)
