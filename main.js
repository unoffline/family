var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://i1.rgstatic.net/ii/profile.image/11431281078683147-1660193660956_Q512/Manh-Huong-Phan.jpg","https://media.newyorker.com/photos/59097b6c1c7a8e33fb3901ee/1:1/w_350,c_limit/fan-jiayang.png", "https://cdn1.iconfinder.com/data/icons/family-avatar-flat-happy-party/1000/Asian_Male001-512.png"];
var names = ["Family Book","DAD", "MOM ", "BROTHER"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 3
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = [images [i]];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = [names [i]] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
