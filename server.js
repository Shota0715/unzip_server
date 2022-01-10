	var AdmZip = require('adm-zip');
	const fs = require('fs')
	const fsext = require('fs-extra');

	const dir = fs.mkdtempSync('./tmp/foo')
	console.log(dir)


	// reading archives
	var zip = new AdmZip("./my_file.zip");
	var zipEntries = zip.getEntries(); // an array of ZipEntry records

	zipEntries.forEach(function(zipEntry) {
	    console.log(zipEntry.toString()); // outputs zip entries information
		if (zipEntry.entryName == "my_file.txt") {
		     console.log(zipEntry.getData().toString('utf8')); 
		}
	});
	// outputs the content of some_folder/my_file.txt
	//console.log(zip.readAsText("some_folder/my_file.txt"));
	// extracts everything
	zip.extractAllTo(/*target path*/`${dir}`+"/", /*overwrite*/true);

	fsext.remove(`${dir}`+"/", (err) => {
    if (err) throw err;

    console.log('tmpディレクトリを削除しました');
	});


	function intervalFunc() {
	  console.log('Cant stop me now!');
	}

	setInterval(intervalFunc, 1500);

