const actionPanes = [
    `
    <div id="appActionPaneSub" class="flex justify-between items-center space-x-4 bg-gradient-to-r from-[#00dff0] to-[#067eff] h-full p-2 rounded-b -mt-2" style="-webkit-app-region: no-drag;">
        <div class="w-3.5 h-3.5 cursor-pointer" onclick="appAction('minimize')">
            <svg class="w-full fill-white hover:fill-gray-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21.17,10H2.83A1.92,1.92,0,0,0,1,12a1.92,1.92,0,0,0,1.83,2H21.17A1.92,1.92,0,0,0,23,12,1.92,1.92,0,0,0,21.17,10Z"/><rect width="24" height="24" fill="none"/></svg>
        </div>
        <div class="w-3.5 h-3.5 cursor-pointer" onclick="appAction('maximize')">
            <svg class="w-full fill-white hover:fill-gray-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><rect width="24" height="24" fill="none"/><rect x="3" y="10" width="18" height="8" fill="none"/><path d="M21,4H1V20H23V4Zm0,14H3V10H21Z"/></svg>
        </div>
        <div class="w-3.5 h-3.5 cursor-pointer" onclick="appAction('exit')">
            <svg class="w-full fill-white hover:fill-gray-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><rect width="24" height="24" fill="none"/><path d="M14.12,12l7.5-7.5A1.5,1.5,0,1,0,19.5,2.38L12,9.88,4.5,2.38A1.5,1.5,0,0,0,2.38,4.5L9.88,12l-7.5,7.5A1.5,1.5,0,1,0,4.5,21.62l7.5-7.5,7.5,7.5a1.5,1.5,0,1,0,2.12-2.12Z"/></svg>
        </div>
    </div>`,

     `<div id="appActionPaneSub" class="flex justify-between items-center space-x-4 bg-white h-full p-2 rounded-b -mt-2" style="-webkit-app-region: no-drag;">
        <div class="w-3.5 h-3.5 cursor-pointer" onclick="appAction('minimize')">
            <svg class="w-full fill-gray-700 hover:fill-yellow-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21.17,10H2.83A1.92,1.92,0,0,0,1,12a1.92,1.92,0,0,0,1.83,2H21.17A1.92,1.92,0,0,0,23,12,1.92,1.92,0,0,0,21.17,10Z"/><rect width="24" height="24" fill="none"/></svg>
        </div>
        <div class="w-3.5 h-3.5 cursor-pointer" onclick="appAction('maximize')">
            <svg class="w-full fill-gray-700 hover:fill-green-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><rect width="24" height="24" fill="none"/><rect x="3" y="10" width="18" height="8" fill="none"/><path d="M21,4H1V20H23V4Zm0,14H3V10H21Z"/></svg>
        </div>
        <div class="w-3.5 h-3.5 cursor-pointer" onclick="appAction('exit')">
            <svg class="w-full fill-gray-700 hover:fill-red-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><rect width="24" height="24" fill="none"/><path d="M14.12,12l7.5-7.5A1.5,1.5,0,1,0,19.5,2.38L12,9.88,4.5,2.38A1.5,1.5,0,0,0,2.38,4.5L9.88,12l-7.5,7.5A1.5,1.5,0,1,0,4.5,21.62l7.5-7.5,7.5,7.5a1.5,1.5,0,1,0,2.12-2.12Z"/></svg>
        </div>
    </div>`,

    `<div class="flex space-x-2" style="-webkit-app-region: no-drag;">
    <div class="w-5 h-5" onclick="appAction('minimize')">
        <svg class="cursor-pointer w-full" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24"><defs><radialGradient id="a" cx="12" cy="12" r="12" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#d0d0d0"/></radialGradient></defs><rect width="24" height="24" fill="none"/><circle cx="12" cy="12" r="12" fill="url(#a)"/><ellipse cx="12" cy="4.31" rx="7.08" ry="3.54" fill="#eee"/><path d="M17.23,13.23H6.77a1.23,1.23,0,1,1,0-2.46H17.23a1.23,1.23,0,0,1,0,2.46Z"/></svg>
    </div>
    
    <div class="w-5 h-5" onclick="appAction('maximize')">
        <svg class="cursor-pointer w-full" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24"><defs><radialGradient id="a" cx="12" cy="12" r="12" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#d0d0d0"/></radialGradient></defs><rect width="24" height="24" fill="none"/><circle cx="12" cy="12" r="12" fill="url(#a)"/><ellipse cx="12" cy="4.31" rx="7.08" ry="3.54" fill="#eee"/><path d="M18.31,16.77H5.69v-9H18.31ZM8.15,14.31h7.7V10.24H8.15Z"/></svg>
    </div>

    <div class="w-5 h-5" onclick="appAction('exit')">
        <svg class="cursor-pointer w-full" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24"><defs><radialGradient id="a" cx="12" cy="12" r="12" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#d0d0d0"/></radialGradient></defs><rect width="24" height="24" fill="none"/><circle cx="12" cy="12" r="12" fill="url(#a)"/><ellipse cx="12" cy="4.31" rx="7.08" ry="3.54" fill="#eee"/><path d="M13.74,12.08l2.63-2.4a1.23,1.23,0,1,0-1.66-1.82l-2.63,2.4L9.68,7.63A1.23,1.23,0,0,0,7.86,9.29l2.4,2.63-2.63,2.4a1.23,1.23,0,0,0,.83,2.14,1.19,1.19,0,0,0,.83-.32l2.63-2.4,2.4,2.63a1.24,1.24,0,0,0,1.74.08,1.23,1.23,0,0,0,.08-1.74Z"/></svg>
    </div>
    

</div>`,

    `<div class="flex justify-between items-center space-x-2" style="-webkit-app-region: no-drag;">
    <div class="panel-round panel-round-maximize" onclick="appAction('maximize')"></div>
    <div class="panel-round panel-round-minimize" onclick="appAction('minimize')"></div>
    <div class="panel-round panel-round-exit" onclick="appAction('exit')"></div>
</div>`
];

const alignments = {
        nba: `
        <div class="logo text-sm flex items-center"><img class="w-4 h-4 mr-1.5 object-cover" src="../../assets/icons/notefinity.png"><span id="fileNoteFinityStatus">Untitled-1</span><pre> - </pre>NoteFinity
            </div>
            
            <div id="appActionPane">
                
            </div>
        `,

        anb: `
        <div id="appActionPane" style="transform: rotateY(180deg);">
            
        </div>
        <div class="logo text-sm flex items-center mr-10"><span id="fileNoteFinityStatus">Untitled</span><pre> - </pre>NoteFinity
        </div>

        <div></div>
            
        `
}

function getHeader(alignment="nba", actionPaneNo) {
    if (alignment == "nba") {
        _id("headerPane").innerHTML = alignments.nba;
    }
    else {
        _id("headerPane").innerHTML = alignments.anb;
    }
    _id("appActionPane").innerHTML = actionPanes[actionPaneNo];
    if (!alignment == "nba") {
        _id("appActionPaneSub").classList.add("flex-row-reverse");
    }
}