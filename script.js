#!/usr/bin/env node
const fs = require('fs');

let cmds = process.argv.slice(2);

function readAndWrite(cmd){

        let opt = cmd.filter(function(data){
            return data.startsWith("-");
            
        })
        let files = cmd.filter(function(data){
            return !data.startsWith("-");
           
        })
        if(files.length == 0){
            console.log("Please specify a file Name");
            return;
        }
        for(i in files){
        if(!fs.existsSync(files[i])){
        console.log("File does not exist : " + files[i]);
        return;
       }
    }

    //write
    if(opt.includes("-w")){
        if(files.length != 2 || opt.length != 1|| cmds.indexOf("-w") != 1){
            console.log("Coomaad not Found");
        }
        let data = fs.readFileSync(files[0],"utf-8");

      

        fs.writeFileSync(files[1],data);
        return; 
        }

        else if(opt.includes("-a")){
            if(files.length != 2 || opt.length != 1|| cmds.indexOf("-a") != 1){
                console.log("Coomaad not Found");
            }
            let data = fs.readFileSync(files[0],"utf-8");
            let data1 = fs.readFileSync(files[0],"utf-8");
     
            fs.writeFileSync(files[1],data + "\r\n" +data1);
            return; 
            }
            else  if(opt.includes("-ws")){
                if(files.length != 2 || opt.length != 1|| cmds.indexOf("-ws") != 1){
                    console.log("Coomaad not Found");
                }
                let data = fs.readFileSync(files[0],"utf-8");
                let lines = data.split("\r\n");
                let allText = "";
                for(j in lines){
                    if(lines[j] != ""){
                       
                       allText += lines[j] + "\n";
                        
                    }
                     
                }
                fs.writeFileSync(files[1],allText);
                return; 
                }

        //Read

        for(i in files){
            let ind = 1;
            let n = 0;
            let b = 0;
            if(opt.includes("-n")&& !opt.includes("-b"))
            n = 1;
            else if(!opt.includes("-n")&& opt.includes("-b"))
            b = 1;

            else if(opt.includes("-n")&& opt.includes("-b")){
                if(opt.indexOf("-n")<opt.indexOf("-b"))
                n = 1;
                else 
                b = 1;
            }
    

        let data = fs.readFileSync(files[i],"utf-8");
        if(opt.includes("-s")){
            let lines = data.split("\r\n");
            let allText = "";
            for(j in lines){
                if(lines[j] != ""){
                    if(n == 0 && b == 0)
                    console.log(lines[j]);
                    else{
                    console.log(ind +" ."+ lines[j]);
                    ind++; }
                }
                 
            } 
            console.log();
        //    console.log(allText);
        }
        else{  data = data.split("\r\n");
            for(j in data){
                if(n == 0 && b == 0)
                    console.log(data[j]);
                else if(b == 1)
                   {    
                    if(data[j] != ""){
                        console.log(ind +" ."+ data[j]);
                        ind++; }
                        else{
                            console.log(data[j]);
                        }
                     }
                     else if(n == 1)
                     {
                        console.log(ind +" ."+ data[j]);
                        ind++;
                     }
                     
            }
            console.log();

        }
       }

       
    }

readAndWrite(cmds);






