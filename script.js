//your code here

const allDivs=document.querySelectorAll(".image");

for(let div of allDivs){
	div.addEventListener("dragstart",(e)=>{
		e.dataTransfer.setData("text",e.target.id);
	})

	div.addEventListener("dragover",(e)=>{
		e.preventDefault();
	})

	div.addEventListener("drop",(e)=>{
		e.preventDefault()
		const draggedElementId=e.dataTransfer.getData("text");
		const draggedElement=document.getElementById(draggedElementId);
		const dropdDiv=e.target
		const draggedElementBgImage=getComputedStyle(draggedElement).backgroundImage;
		const dropDivBgImage=getComputedStyle(dropdDiv).backgroundImage
		const dropDivText=dropDiv.innerText;
		const draggedElementText=draggedElement.innerText;

		draggedElement.style.backgroundImage=dropDivBgImage;
		draggedElement.innerText=dropDivText;
		dropDiv.style.backgroundImage=draggedElementBgImage
		dropDiv.innerText=draggedElementText;
	})
}
