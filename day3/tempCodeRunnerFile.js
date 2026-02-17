const writeFileSync=(file,data)=>{
    try{
        fs.writeFileSync(path,data);
        console.log("file has been created");
    }catch(error){
        console.log("unable to write");
    }
    fs.writeFileSync(file,data);
    console.log("File has been created successfuly");
}
writeFileSync("example.txt","This data is written through sync");