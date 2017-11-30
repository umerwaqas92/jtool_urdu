//here goes all the javascript code
	function TMR_rati(tola,masha,rati){
		var rati=(tola*96) +(masha*8)+(rati*1);
		return rati;
	}
	
	function english(){
		window.open("https://vovoapps.github.io/jtool","_self")
	}
	function total_price(price,rati){
	var pr=(rati/96)*price;
	return pr.toFixed(1) +" rupees" ;
	
	}
	function rati_TMR(rati){
		var Tola,Masha,Rati;
		Tola=Math.floor(rati/96);
		
		Masha= Math.floor((rati - (Tola * 96)) / 8);
		Rati= rati - (Tola * 96) - (Masha * 8);
		
		if (Rati >= 7.9) {
			Rati = 0.0;
			Masha++;
		}
		if (Masha >= 11.9) {
			Rati = 0.0;
			Tola++;

		}
		
		return Tola +" - "+ Masha+" - "+Rati.toFixed(1);
	}
	
	function gram_unite( gram) {
		if (gram > 1000) {
			return (gram / 1000).toFixed(3) + " kg";
		} else if (gram < 1) {
			return (gram * 1000).toFixed(3) + " mg";
		}
		return (gram).toFixed(3) + " g";
	}
	
	function gram_rati( grams) {
		return (96 / 11.6638038) * grams;
	}
	
	function rati_to_gram( rati) {
		return (11.6638038 / 96) * rati;
	}
	
	
	
	
	function rupeesTOWeight(price,rps){
		var ratis=(96/price)*rps;
		return ratis;
	}
	
	function sell_tabs(){
		document.getElementById("content").style.display="none";
		
	}
	function calculate(){
	var Price=document.getElementById("price").value;
	
	var Tola=document.getElementById("tola").value;
	var Masha=document.getElementById("masha").value;
	var Rati=document.getElementById("rati").value;
	
	var ctMasha=document.getElementById("ct_masha").value;
	var ctRati=document.getElementById("ct_rati").value;
	
	var total_rati=TMR_rati(Tola,Masha,Rati);
	var ct_rati=TMR_rati(0,ctMasha,ctRati);
		var remaing_rati=total_rati-(total_rati * (ct_rati/96));
		
		//var result_htm="Total Weight    "+rati_TMR(total_rati);
		
		//result_htm+="<br>Cut Weight "+rati_TMR(total_rati-remaing_rati);
	//	result_htm+="<br>Remaing Weight "+rati_TMR(remaing_rati);
		
		
		document.getElementById("out1").innerHTML=rati_TMR(total_rati) ;
		document.getElementById("out1_").innerHTML=gram_unite(rati_to_gram(total_rati));
		document.getElementById("out2").innerHTML=rati_TMR(total_rati-remaing_rati) ;
		document.getElementById("out3").innerHTML=rati_TMR(remaing_rati);
		document.getElementById("out4").innerHTML=total_price(Price,remaing_rati);
		document.getElementById("out5").innerHTML=(24-((TMR_rati(0,ctMasha,ctRati)/96)*24)).toFixed(1) +"K";
		
		
				
		
		
	}
	
	var total_rati_tab2=0;
	var tab2_cnt=0;
	function calculatetab2(type){
		var weight=TMR_rati(document.getElementById("tola_tab2").value,document.getElementById("masha_tab2").value,document.getElementById("rati_tab2").value);
		var a;
		var color;
		
		if(weight==0){
			return 0;
		}

		if(type==1){
			color="white";
				a="+";
			total_rati_tab2+=weight;
		}else{	
				a="-";
			color="rgb(246,246,246) ";
		if(total_rati_tab2==0){
			color="white";
				a="+";
				
			total_rati_tab2+=weight;	
		}else{
			total_rati_tab2-=weight;
			}
			}
			document.getElementById("out1_tab2").innerHTML=rati_TMR(total_rati_tab2);
			document.getElementById("out2_tab2").innerHTML+="<br><a style=\" width=100%; paddingLeft:200px; paddingRight:200px; marginBottom:10px; background-color:"+color+"; \">"+a+" "+rati_TMR(weight)+"</a>";
			document.getElementById("tola_tab2").value="";
			document.getElementById("rati_tab2").value="";
			document.getElementById("masha_tab2").value="";
		
	}
	
	
	
	
	function onsload(){
		tab_click(0);
	}
	
	
		function calculatetab1(){
		var pric=document.getElementById("price_tab1").value;
		var rupees=document.getElementById("total_rps_tab1").value;
		if(pric==0){
			pric=1;
		}
		var ratis=rupeesTOWeight(pric,rupees);
	document.getElementById("tab1_out1").innerHTML=rati_TMR(ratis);
	document.getElementById("tab1_out2").innerHTML=gram_unite(rati_to_gram(ratis));
	

	}
	
	
	
	
	/////______________calculate3
	function calculate3(){
			
			var price=document.getElementById("price_tab3").value;
			var cut_rati=document.getElementById("ctrati_tab3").value;
			var total_rati =gram_rati(document.getElementById("grams_tab3").value);
			var remaing_rati=total_rati-(cut_rati/96)*total_rati;
			
			document.getElementById("tab3_out0").innerHTML=rati_TMR(total_rati);
			document.getElementById("tab3_out1").innerHTML=gram_unite(rati_to_gram(total_rati));
			document.getElementById("tab3_out2").innerHTML=gram_unite(rati_to_gram(total_rati-remaing_rati));
			document.getElementById("tab3_out3").innerHTML=gram_unite(rati_to_gram(remaing_rati));
			document.getElementById("tab3_out4").innerHTML=(((96-cut_rati)/96)*24).toFixed(1) +"K";
			document.getElementById("tab3_out5").innerHTML=total_price(price,remaing_rati);
			
			
	}
	/////
	
	
	
	////calculate5
	function calculate5(){
			var weight=TMR_rati(document.getElementById("tolai_tab5").value,document.getElementById("mashai_tab5").value,document.getElementById("ratii_tab5").value);
			var weightf=TMR_rati(document.getElementById("tolaf_tab5").value,document.getElementById("mashaf_tab5").value,document.getElementById("ratif_tab5").value);
			if(weight==0){
			document.getElementById("tab5_out0").innerHTML="0 - 0 - 0.0 ";//per tola
			document.getElementById("tab5_out1").innerHTML="0.0"+"K";//per tola
				return;
			}
			
			document.getElementById("tab5_out0").innerHTML=rati_TMR(((weight-weightf)/weight)*96);//per tola
			document.getElementById("tab5_out1").innerHTML=(24-(((weight-weightf)/weight)*24).toFixed(1))+"K";//per tola
	
	}
	
	
	///
	
	
	
	
	
	
	var currentTab=0;
	function tab_click(tab){
	//var tabs={document.getElementById("tab0"),document.getElementById("tab1")document.getElementById("tab2"),document.getElementById("tab3")};
	document.getElementById("tab0").style.display="none";
	document.getElementById("tab1").style.display="none";
	document.getElementById("tab2").style.display="none";
	document.getElementById("tab3").style.display="none";
	document.getElementById("tab4").style.display="none";
	document.getElementById("tab5").style.display="none";
	document.getElementById("tab6").style.display="none";
	document.getElementById("tab7").style.display="none";
	
	document.getElementById("tab_btn0").style.color="";
	document.getElementById("tab_btn1").style.color="";
	document.getElementById("tab_btn2").style.color="";
	document.getElementById("tab_btn3").style.color="";
	document.getElementById("tab_btn4").style.color="";
	document.getElementById("tab_btn5").style.color="";
	document.getElementById("tab_btn6").style.color="";
	document.getElementById("tab_btn7").style.color="";
	
	
	
	document.getElementById("tab_btn"+tab).style.color="#81D4FA";
	
	document.getElementById("tab"+tab).style.display="initial";
		currentTab=tab;
		
		document.getElementById("header").scrollTo(100,0);
	}
	
	
	function reset5(){
		document.getElementById("tolai_tab5").value="";
		document.getElementById("mashai_tab5").value="";
		document.getElementById("ratii_tab5").value="";
		document.getElementById("ratif_tab5").value="";
		document.getElementById("mashaf_tab5").value="";
		document.getElementById("tolaf_tab5").value="";
		calculate5();
		
	}
	
	function reset3(){
		document.getElementById("price_tab3").value="";
		document.getElementById("grams_tab3").value="";
		document.getElementById("ctrati_tab3").value="";
	calculate3();
		
	}
	
	function reset2(){
		document.getElementById("masha_tab2").value="";
		document.getElementById("rati_tab2").value="";
		 total_rati_tab2=0;
	 tab2_cnt=0;
	 document.getElementById("out2_tab2").innerHTML="";
	 document.getElementById("out1_tab2").innerHTML="0 - 0 - 0.0";
	}
	
	
	function reset1(){
		document.getElementById("price_tab1").value="";
		document.getElementById("total_rps_tab1").value="";
		calculatetab1();
	}
	
	
	function reset0(){
	document.getElementById("price").value="";
	document.getElementById("tola").value="";
	document.getElementById("masha").value="";
	document.getElementById("rati").value="";
	document.getElementById("ct_masha").value="";
	document.getElementById("ct_rati").value="";
	calculate();
	}
	
	