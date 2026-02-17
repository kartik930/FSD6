import fs from "fs";
const readFileSync=(file)=>{
    try{
        const data=fs.readFileSync(file,"utf-8");
        console.log(data);
    }catch(error){
        console.log("unable to read")
    }
}
const appendFileSync=()=>{
    try{
        fs.appendFileSync();
        console.log("File has been appended succesfully");
    }catch(error){
        console.log("unable to append");
    }
} 
appendFileSync("exp2","this data is appended");


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