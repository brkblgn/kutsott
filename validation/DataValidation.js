let maxSensorCount = 3;                                         //kullanıcının veri gönderebileceği max sensör sayısı

module.exports.dataKontrol = (message) => {

    const errors = []


    let sensorCount = Object.keys(message).length;              //message parametresi ile almış olduğumuz sensör verilerinin sayısını kaydediyoruz.

    if(sensorCount > maxSensorCount) 
        errors.push({message: `You don't have Pro Subsciption. You can only post ${maxSensorCount} sensor data.`})            //eğer kullanıcıdan gelen sensör sayısı maximum veri sayısından büyükse veya eşitse hata ver

    
    return errors;
}