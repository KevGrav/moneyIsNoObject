// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘
const isAdmin = function(obj){
    return obj.userRole === 'ADMIN'
}

const getEmail = function(obj){
    let firstInitial = obj.firstName[0].toLowerCase()
    let lowerCaseLastName = obj.lastName.toLowerCase()
    return firstInitial + lowerCaseLastName + '.prsvr@gmail.com'
}

const getPlaylistLength = function(obj){
    return obj.songs.length
}

const getHardestHomework = function(obj){
    let num = 0
    for(let num of obj.averageScore){
    if (obj.averageScore[i] < num){
    num = obj.averageScore[i]; 
    i++;
    }else{
       return obj.name[i]
        }
    }   
}
     
  const createPhonebook = function(obj){
    let phoneBook = []
    for(let i = 0; i < obj.[0].length; i++){
        phoneBook.push(obj.[0][i], obj.[1][i])
          }
    return phoneBook
}  






// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};