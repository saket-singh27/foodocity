
function searchResto(searchText , restrauntshow){     // filterfunction
    const filter= restrauntshow.filter((restraunt)=>
      restraunt?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
      );
      return filter;
  }

  export default searchResto;