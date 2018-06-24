


read -p "Build and send to server ? (Y|n) " client

if [ "$client" == "" -o "$client" == "y" -o "$client" == "Y" ]; then
	rm -R build
    rm -R build.zip
	npm run build
	tar zcvf build.zip build/
	scp build.zip nico@greatsaigon.acte.solutions:/greatsaigon.dev
    ssh nico@greatsaigon.acte.solutions:/greatsaigon.dev cp 
	
fi

