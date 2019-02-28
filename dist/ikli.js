var ikli = {
    
    elements:[],
    location:'./includes',
    mimetype:'html',
    customComponent:false,
    
    render(){
        if(this.elements.length === 0){
            console.error(`ikli Error: render() is called but elements are empty`);
        } else {
            this.elements.forEach(element=>{
               fetch(`${this.location}/${element}.${this.mimetype}`)
                .then(res=>{
                    return res.clone().text();
                })
                .then(res=>{
	                var qs;
                    if(this.customComponent === false){
                        qs = document.querySelector(`#${element}`);
                        if(qs) qs.innerHTML = res;
                    } else {
                        qs = document.querySelector(element);
                        if(qs) qs.innerHTML = res;
                    }
                    
                }).catch(err=>{
                    console.error(`ikli Error: ${err}`);
                });
            });

        }
    }
    

};
