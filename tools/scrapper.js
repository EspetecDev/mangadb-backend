
const axios = require('axios').default;
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const fs = require('fs');
const cliProgress = require('cli-progress');

const bar1 = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);

const list_url = 'https://www.listadomanga.es/lista.php';
const manga_base_url = 'https://www.listadomanga.es/coleccion.php?id=';


function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

async function get_manga_ids() {   
    let res  = await axios.get(list_url);
    let dom  = new JSDOM(res.data);
    let doc =  dom.window.document;

    let hrefs = [];
    doc.querySelectorAll('a').forEach( a => hrefs.push( a.href));
    hrefs = hrefs.filter( h => h.includes('id'));
    // get ids
    return hrefs.filter( h => h.includes('id')).map( h => {
        let idx = h.indexOf('id=');
        return h.substr(idx+3);
    });
}

async function get_manga_data(ids){
    let title_counter = 1;
    bar1.start(ids.length, 0);
    return await Promise.all(ids.map( async id => {
        try{
            await sleep(2000);
            res = await axios.get(manga_base_url + id);
            
            console.log(`parsing manga: ${title_counter}/${ids.length} \tid: ${id}`);
            // bar1.update(title_counter);
            title_counter += 1;
            dom  = new JSDOM(res.data);
            doc =  dom.window.document;
            
            return {id: parseInt(id), title: doc.querySelector('h2').textContent.trim()}
        } catch (e) {
            console.log(e);
        }
    }));
}

async function main() {
    const start_time = performance.now();
    const ids = await get_manga_ids();
    console.log(`got ${ids.length} ids`);
    const manga_objs = await get_manga_data(ids);
    // store to file
    const json_data = JSON.stringify(manga_objs, null, 4);
    fs.writeFileSync('mangas.json', json_data, (err) => console.log(err));
    bar1.stop();
    console.log('==============================================')
    console.log(`parsed mangas: ${manga_objs.length} total time: ${((performance.now() - start_time)/1000).toFixed(2)}s`);
}

main();




 


