const linkList = () => {
  const rawCollection = document.getElementsByClassName("VFACy");
  let ar = new Array();

  for (
    let i = 0, iteratorLimit = rawCollection.length;
    i < iteratorLimit;
    i++
  ) {
    let urlString = rawCollection[i].href;
    ar.push(urlString);
  };
  let data = ar;

  let bom  = new Uint8Array([0xEF, 0xBB, 0xBF]);
  let blob = new Blob([bom, data], {type: 'text/csv'});
  let url = (window.URL || window.webkitURL).createObjectURL(blob);
  let link = document.createElement('a');
  link.download = 'result.csv';
  link.href = url;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

linkList();