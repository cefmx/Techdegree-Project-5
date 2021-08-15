
function searchFilter() {
    let input = document.getElementById('search').value.toLowerCase();
      
    for (let i = 0; i < 12; i++) { 
        let caption = document.getElementsByTagName('a')[i].getAttribute('data-caption');
        if (!caption.includes(input)) {
            document.getElementsByTagName('a')[i].style.display= 'none';
        }
        else {
            document.getElementsByTagName('a')[i].style.display='block';  
        }               
        
    }
}
document.getElementById('search').addEventListener('input', searchFilter);



