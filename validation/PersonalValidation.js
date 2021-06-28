module.exports.bilgiKontrol = (token, topic, message) => {

    const errors = [];                                                                                   //hataları ekleyeceğimiz bir dize oluşturdum

    if (!token || !topic || !message)
        errors.push({ message: `Plese post the json with "UserToken" , "topic" and "message" fields` })     //eğer tokeni topic veya message boş ise dizimize bir hata ekleyecek.



    return errors;

}