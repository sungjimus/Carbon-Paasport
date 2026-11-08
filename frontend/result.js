let result_data = sessionStorage.getItem('result');
let farmer_data = sessionStorage.getItem('myfarmdata');
document.getElementById("estimated-emission-number").textContent=Number(result_data).toFixed(2);

let rice_co2, fert_co2, diesel_co2, name_value, area_farm, original_area, area_unit, crop_type, water, fertilizer, fert_amt, residue;
if (farmer_data) {
    let farmpackage = JSON.parse(farmer_data);

    rice_co2 = farmpackage.riceco2;
    fert_co2 = farmpackage.fertco2;
    diesel_co2 = farmpackage.dieselco2;
    name_value = farmpackage.name;
    area_farm = farmpackage.areafarm;
    original_area = farmpackage.originalarea;
    area_unit = farmpackage.areaunit;
    crop_type = farmpackage.crop;
    water = farmpackage.water;
    fertilizer = farmpackage.fertilizer;
    fert_amt = farmpackage.fertamt;
    residue = farmpackage.residue;

    document.getElementById("name_value").textContent = name_value;
    document.getElementById("area_farm_value").textContent = original_area + " " + area_unit;
    document.getElementById("hectares-acres").textContent = "(" + Number(area_farm).toFixed(2) + " ha)";
    document.getElementById("crop-type_value").textContent = crop_type;
    document.getElementById("water_value").textContent = water;
    document.getElementById("fert-amount_value").textContent = fert_amt + "kg";
    document.getElementById("fertilizer_value").textContent = fertilizer ;
    
    document.getElementById("rice_co2_value").textContent = rice_co2+"t";
    document.getElementById("fert_co2_value").textContent = fert_co2 +"t";
    document.getElementById("diesel_co2_value").textContent = diesel_co2 +"t";
    document.getElementById("residue_co2_value").textContent = residue +"t";
} else {
    console.log("No data found in sessionStorage for 'myfarmdata'");
}
