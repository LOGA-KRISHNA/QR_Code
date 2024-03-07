import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
  .prompt([
    {
        message:"Enter the URL: ",
        name:"url"
    }
  ])
  .then((ans) => {
    const URL=ans.url;
    const mes=ans.message;
    var qr_svg = qr.image(URL);
    qr_svg.pipe(fs.createWriteStream("image.png"));

    fs.writeFile("text.txt",("Entered URL is : "+URL),(err)=>{
      if(err) throw err;
      console.log("File Created Succefully");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      
    } else {
      // Something else went wrong
    }
  });