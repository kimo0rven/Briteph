
/** 
 * log("sample logging statement") --> can be used to print any data in the browser console.
 * ZDK module can be used for customising the UI and other functionalities.
 * return false to prevent <SAVE> action
**/

const stringContainers = ZDK.Page.getField('Solid_Waste_Container_Info');
const splitContainers = stringContainers.getValue().split(",");
const containers = [];
const weeklyOutput = 0;
for (let container in splitContainers) {
    var itemContainer = Object();
    var newContainer = splitContainers[container].trim();
    var splitNewContainer = newContainer.split(" ");
    var isRecyclable = false;
    var length = 0;
    var width = 0;
    var pickUp = 0;
    var dimension = "";

    if (splitNewContainer.length === 3) {
        isRecyclable = true;
        pickUp = splitNewContainer[2].replace("x", "");
        console.log(pickUp);
    }else
	{
		pickUp = splitNewContainer[1].replace("x", "");
    }
    dimension = splitNewContainer[0].replace("yd", "");
    arrDimension = dimension.split("-");
    width = arrDimension[0];
    length = arrDimension[1];
    itemContainer.Pickup_Week = Number(pickUp);
    itemContainer.Container_Length = Number(length);
    itemContainer.Container_Width = Number(width);
    itemContainer.Is_Recycling_Container = isRecyclable;
    containers.push(itemContainer);
    weeklyOutput += Number(pickUp) * Number(length) * Number(width);

}




ZDK.Page.getForm().setValues({'Solid_Waste_Container': containers, "Weekly_Output": weeklyOutput});
