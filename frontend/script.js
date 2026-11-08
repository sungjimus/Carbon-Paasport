let result;
let rice_ch4;
let rice_co2;
let fert_co2;
let diesel_co2;
let residue, dry_residue,burned_fraction,dry_matter_burned,ch4_tonnes,ch4_co2,n2o_tonnes,n2o_co2,residue_co2;
let total_emission;
let farmer_data;

document.getElementById("farm-form").addEventListener("submit",function(event){

    event.preventDefault();

    let name= document.getElementById("user-name").value;

    let original_area = Number(document.getElementById("farm-area").value);
    let area_farm = original_area;
    let area_unit = document.querySelector('select[name="hectares-acres"]').value;

    if (area_unit=="Acres"){
        area_farm=area_farm*0.404686;
    }

    let crop_type= document.getElementById("crop-type").value;

    let water= document.getElementById("water").value;

    let fertilizer= document.getElementById("fertilizer").value;

    let amount_fert= Number(document.getElementById("amount-fertilizer").value);

    let crop_residue= document.getElementById("crop-residue-management").value;

    let diesel= document.getElementById("diesel").value;

    let litres= Number(document.getElementById("litres").value);

    let burned_percentage=Number(document.getElementById("residue").value);
    let rice_produced=Number(document.getElementById("rice-produce").value);

    if (area_farm <= 0){
        alert("Farm area must be greater than 0.");
        return;
    }

    if (fertilizer != "None" && amount_fert <= 0){
        alert("Fertilizer amount must be greater than 0.");
        return;
    }

    if (burned_percentage < 0 || burned_percentage > 100){
        alert("Burned residue percentage must be between 0 and 100.");
        return;
    }

    if (rice_produced <= 0){
        alert("Rice production cannot be negative.");
        return;
    }

    if (diesel == "yes" && litres <= 0){
        alert("Diesel usage must be greater than 0.");
        return;
    }   

    result=calculation(name,area_farm,crop_type,water,fertilizer,amount_fert,crop_residue,diesel,litres,burned_percentage,rice_produced);
    sessionStorage.setItem('result',result);
    farmer_data={
        riceco2:rice_co2,fertco2:fert_co2,dieselco2:diesel_co2,name:name,
        areafarm:area_farm,originalarea:original_area,areaunit:area_unit,
        crop:crop_type,water:water,fertilizer:fertilizer,fertamt:amount_fert,residue:residue_co2
    };
    sessionStorage.setItem('myfarmdata',JSON.stringify(farmer_data));

    window.location.href="result.html";
});

function calculation(name,area_farm,crop_type,water,fertilizer,amount_fert,crop_residue,diesel,litres,burned_percentage,rice_produced){

    if (water=="Continously flooded"){
        let rice_factor=159.74;
        rice_ch4=area_farm*rice_factor;
    }

    else if (water=="Intermittently flooded"){
        let rice_factor=66.20;
        rice_ch4=area_farm*rice_factor;
    }

    else if (water=="Rain-fed"){
        let rice_factor=68.84;
        rice_ch4=area_farm*rice_factor;
    }
    
    rice_co2=(rice_ch4*27)/1000;

    if (fertilizer=="Urea"){
        let nitrogen=amount_fert*0.46;
        let n2on= nitrogen*0.0055;
        let n2o=n2on*(44/28);
        fert_co2=(n2o*273)/1000;
    }

    else if (fertilizer=="Other nitrogen fertilizer"){
        let n2on=amount_fert*0.0055;
        let n2o=n2on*(44/28);
        fert_co2=(n2o*273)/1000;
    }
    else if (fertilizer=="None"){
        fert_co2=0;
    }

    if (diesel=="yes"){
        diesel_co2=(litres*2.7)/1000;
    }
    else{
        diesel_co2=0;
    }

    residue= rice_produced*1.5;
    dry_residue=residue*0.86;
    
    burned_fraction=burned_percentage/100;
    dry_matter_burned=dry_residue*burned_fraction;

    ch4_tonnes=(dry_matter_burned*2.7)/1000000;
    ch4_co2=ch4_tonnes*27;

    n2o_tonnes=(dry_matter_burned*0.07)/1000000;
    n2o_co2=n2o_tonnes*273;

    residue_co2=ch4_co2+n2o_co2;

    total_emission=rice_co2+fert_co2+diesel_co2+residue_co2;

    return total_emission;

}   



document.getElementById("diesel").addEventListener("change",function(){

    let diesel= this.value;

    if (diesel=="yes"){
        document.getElementById("diesel_used").style.display="block";
    }
    else{
        document.getElementById("diesel_used").style.display="none";
    }
});

document.getElementById("crop-type").addEventListener("change",function(){

    let crop=this.value;
    let hidden= document.getElementsByClassName("hide-field");

    if (crop=="Rice"){

        for (let i=0; i<hidden.length;i++){
            hidden[i].style.display="block";
        }

        document.getElementById("crop-error").style.display="none";
        
    }

    else if(crop=="Others"){

        document.getElementById("crop-error").style.display="block";
        document.getElementById("diesel_used").style.display="none";
        document.getElementById("calculate-button").style.display="none";

        for (let i=0; i<hidden.length;i++){
            hidden[i].style.display="none";
        }

    }

});

document.getElementById("crop-residue-management").addEventListener("change",function(){

    let residue_type=this.value;

    if (residue_type=="Burned"){

        document.getElementById("residue-percentage").style.display="block";
        document.getElementById("diesel-y-n").style.display="block";
        document.getElementById("residue-error").style.display="none";
        document.getElementById("calculate-button").style.display="block";

    }

    else{

        document.getElementById("residue-percentage").style.display="none";
        document.getElementById("diesel-y-n").style.display="none";
        document.getElementById("diesel_used").style.display="none";
        document.getElementById("residue-error").style.display="block";
        document.getElementById("calculate-button").style.display="none";

    }

});