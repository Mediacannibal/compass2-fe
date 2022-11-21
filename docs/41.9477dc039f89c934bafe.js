(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{717:function(r,e,t){"use strict";var a={generateIdentifier:function(){return Math.random().toString(36).substr(2,10)}};a.localCName=a.generateIdentifier(),a.splitLines=function(r){return r.trim().split("\n").map((function(r){return r.trim()}))},a.splitSections=function(r){return r.split("\nm=").map((function(r,e){return(e>0?"m="+r:r).trim()+"\r\n"}))},a.getDescription=function(r){var e=a.splitSections(r);return e&&e[0]},a.getMediaSections=function(r){var e=a.splitSections(r);return e.shift(),e},a.matchPrefix=function(r,e){return a.splitLines(r).filter((function(r){return 0===r.indexOf(e)}))},a.parseCandidate=function(r){for(var e,t={foundation:(e=0===r.indexOf("a=candidate:")?r.substring(12).split(" "):r.substring(10).split(" "))[0],component:parseInt(e[1],10),protocol:e[2].toLowerCase(),priority:parseInt(e[3],10),ip:e[4],address:e[4],port:parseInt(e[5],10),type:e[7]},a=8;a<e.length;a+=2)switch(e[a]){case"raddr":t.relatedAddress=e[a+1];break;case"rport":t.relatedPort=parseInt(e[a+1],10);break;case"tcptype":t.tcpType=e[a+1];break;case"ufrag":t.ufrag=e[a+1],t.usernameFragment=e[a+1];break;default:t[e[a]]=e[a+1]}return t},a.writeCandidate=function(r){var e=[];e.push(r.foundation),e.push(r.component),e.push(r.protocol.toUpperCase()),e.push(r.priority),e.push(r.address||r.ip),e.push(r.port);var t=r.type;return e.push("typ"),e.push(t),"host"!==t&&r.relatedAddress&&r.relatedPort&&(e.push("raddr"),e.push(r.relatedAddress),e.push("rport"),e.push(r.relatedPort)),r.tcpType&&"tcp"===r.protocol.toLowerCase()&&(e.push("tcptype"),e.push(r.tcpType)),(r.usernameFragment||r.ufrag)&&(e.push("ufrag"),e.push(r.usernameFragment||r.ufrag)),"candidate:"+e.join(" ")},a.parseIceOptions=function(r){return r.substr(14).split(" ")},a.parseRtpMap=function(r){var e=r.substr(9).split(" "),t={payloadType:parseInt(e.shift(),10)};return e=e[0].split("/"),t.name=e[0],t.clockRate=parseInt(e[1],10),t.channels=3===e.length?parseInt(e[2],10):1,t.numChannels=t.channels,t},a.writeRtpMap=function(r){var e=r.payloadType;void 0!==r.preferredPayloadType&&(e=r.preferredPayloadType);var t=r.channels||r.numChannels||1;return"a=rtpmap:"+e+" "+r.name+"/"+r.clockRate+(1!==t?"/"+t:"")+"\r\n"},a.parseExtmap=function(r){var e=r.substr(9).split(" ");return{id:parseInt(e[0],10),direction:e[0].indexOf("/")>0?e[0].split("/")[1]:"sendrecv",uri:e[1]}},a.writeExtmap=function(r){return"a=extmap:"+(r.id||r.preferredId)+(r.direction&&"sendrecv"!==r.direction?"/"+r.direction:"")+" "+r.uri+"\r\n"},a.parseFmtp=function(r){for(var e,t={},a=r.substr(r.indexOf(" ")+1).split(";"),n=0;n<a.length;n++)t[(e=a[n].trim().split("="))[0].trim()]=e[1];return t},a.writeFmtp=function(r){var e="",t=r.payloadType;if(void 0!==r.preferredPayloadType&&(t=r.preferredPayloadType),r.parameters&&Object.keys(r.parameters).length){var a=[];Object.keys(r.parameters).forEach((function(e){r.parameters[e]?a.push(e+"="+r.parameters[e]):a.push(e)})),e+="a=fmtp:"+t+" "+a.join(";")+"\r\n"}return e},a.parseRtcpFb=function(r){var e=r.substr(r.indexOf(" ")+1).split(" ");return{type:e.shift(),parameter:e.join(" ")}},a.writeRtcpFb=function(r){var e="",t=r.payloadType;return void 0!==r.preferredPayloadType&&(t=r.preferredPayloadType),r.rtcpFeedback&&r.rtcpFeedback.length&&r.rtcpFeedback.forEach((function(r){e+="a=rtcp-fb:"+t+" "+r.type+(r.parameter&&r.parameter.length?" "+r.parameter:"")+"\r\n"})),e},a.parseSsrcMedia=function(r){var e=r.indexOf(" "),t={ssrc:parseInt(r.substr(7,e-7),10)},a=r.indexOf(":",e);return a>-1?(t.attribute=r.substr(e+1,a-e-1),t.value=r.substr(a+1)):t.attribute=r.substr(e+1),t},a.parseSsrcGroup=function(r){var e=r.substr(13).split(" ");return{semantics:e.shift(),ssrcs:e.map((function(r){return parseInt(r,10)}))}},a.getMid=function(r){var e=a.matchPrefix(r,"a=mid:")[0];if(e)return e.substr(6)},a.parseFingerprint=function(r){var e=r.substr(14).split(" ");return{algorithm:e[0].toLowerCase(),value:e[1]}},a.getDtlsParameters=function(r,e){return{role:"auto",fingerprints:a.matchPrefix(r+e,"a=fingerprint:").map(a.parseFingerprint)}},a.writeDtlsParameters=function(r,e){var t="a=setup:"+e+"\r\n";return r.fingerprints.forEach((function(r){t+="a=fingerprint:"+r.algorithm+" "+r.value+"\r\n"})),t},a.parseCryptoLine=function(r){var e=r.substr(9).split(" ");return{tag:parseInt(e[0],10),cryptoSuite:e[1],keyParams:e[2],sessionParams:e.slice(3)}},a.writeCryptoLine=function(r){return"a=crypto:"+r.tag+" "+r.cryptoSuite+" "+("object"==typeof r.keyParams?a.writeCryptoKeyParams(r.keyParams):r.keyParams)+(r.sessionParams?" "+r.sessionParams.join(" "):"")+"\r\n"},a.parseCryptoKeyParams=function(r){if(0!==r.indexOf("inline:"))return null;var e=r.substr(7).split("|");return{keyMethod:"inline",keySalt:e[0],lifeTime:e[1],mkiValue:e[2]?e[2].split(":")[0]:void 0,mkiLength:e[2]?e[2].split(":")[1]:void 0}},a.writeCryptoKeyParams=function(r){return r.keyMethod+":"+r.keySalt+(r.lifeTime?"|"+r.lifeTime:"")+(r.mkiValue&&r.mkiLength?"|"+r.mkiValue+":"+r.mkiLength:"")},a.getCryptoParameters=function(r,e){return a.matchPrefix(r+e,"a=crypto:").map(a.parseCryptoLine)},a.getIceParameters=function(r,e){var t=a.matchPrefix(r+e,"a=ice-ufrag:")[0],n=a.matchPrefix(r+e,"a=ice-pwd:")[0];return t&&n?{usernameFragment:t.substr(12),password:n.substr(10)}:null},a.writeIceParameters=function(r){return"a=ice-ufrag:"+r.usernameFragment+"\r\na=ice-pwd:"+r.password+"\r\n"},a.parseRtpParameters=function(r){for(var e={codecs:[],headerExtensions:[],fecMechanisms:[],rtcp:[]},t=a.splitLines(r)[0].split(" "),n=3;n<t.length;n++){var s=t[n],i=a.matchPrefix(r,"a=rtpmap:"+s+" ")[0];if(i){var p=a.parseRtpMap(i),c=a.matchPrefix(r,"a=fmtp:"+s+" ");switch(p.parameters=c.length?a.parseFmtp(c[0]):{},p.rtcpFeedback=a.matchPrefix(r,"a=rtcp-fb:"+s+" ").map(a.parseRtcpFb),e.codecs.push(p),p.name.toUpperCase()){case"RED":case"ULPFEC":e.fecMechanisms.push(p.name.toUpperCase())}}}return a.matchPrefix(r,"a=extmap:").forEach((function(r){e.headerExtensions.push(a.parseExtmap(r))})),e},a.writeRtpDescription=function(r,e){var t="";t+="m="+r+" ",t+=e.codecs.length>0?"9":"0",t+=" UDP/TLS/RTP/SAVPF ",t+=e.codecs.map((function(r){return void 0!==r.preferredPayloadType?r.preferredPayloadType:r.payloadType})).join(" ")+"\r\n",t+="c=IN IP4 0.0.0.0\r\n",t+="a=rtcp:9 IN IP4 0.0.0.0\r\n",e.codecs.forEach((function(r){t+=a.writeRtpMap(r),t+=a.writeFmtp(r),t+=a.writeRtcpFb(r)}));var n=0;return e.codecs.forEach((function(r){r.maxptime>n&&(n=r.maxptime)})),n>0&&(t+="a=maxptime:"+n+"\r\n"),t+="a=rtcp-mux\r\n",e.headerExtensions&&e.headerExtensions.forEach((function(r){t+=a.writeExtmap(r)})),t},a.parseRtpEncodingParameters=function(r){var e,t=[],n=a.parseRtpParameters(r),s=-1!==n.fecMechanisms.indexOf("RED"),i=-1!==n.fecMechanisms.indexOf("ULPFEC"),p=a.matchPrefix(r,"a=ssrc:").map((function(r){return a.parseSsrcMedia(r)})).filter((function(r){return"cname"===r.attribute})),c=p.length>0&&p[0].ssrc,o=a.matchPrefix(r,"a=ssrc-group:FID").map((function(r){return r.substr(17).split(" ").map((function(r){return parseInt(r,10)}))}));o.length>0&&o[0].length>1&&o[0][0]===c&&(e=o[0][1]),n.codecs.forEach((function(r){if("RTX"===r.name.toUpperCase()&&r.parameters.apt){var a={ssrc:c,codecPayloadType:parseInt(r.parameters.apt,10)};c&&e&&(a.rtx={ssrc:e}),t.push(a),s&&((a=JSON.parse(JSON.stringify(a))).fec={ssrc:c,mechanism:i?"red+ulpfec":"red"},t.push(a))}})),0===t.length&&c&&t.push({ssrc:c});var u=a.matchPrefix(r,"b=");return u.length&&(u=0===u[0].indexOf("b=TIAS:")?parseInt(u[0].substr(7),10):0===u[0].indexOf("b=AS:")?1e3*parseInt(u[0].substr(5),10)*.95-16e3:void 0,t.forEach((function(r){r.maxBitrate=u}))),t},a.parseRtcpParameters=function(r){var e={},t=a.matchPrefix(r,"a=ssrc:").map((function(r){return a.parseSsrcMedia(r)})).filter((function(r){return"cname"===r.attribute}))[0];t&&(e.cname=t.value,e.ssrc=t.ssrc);var n=a.matchPrefix(r,"a=rtcp-rsize");e.reducedSize=n.length>0,e.compound=0===n.length;var s=a.matchPrefix(r,"a=rtcp-mux");return e.mux=s.length>0,e},a.parseMsid=function(r){var e,t=a.matchPrefix(r,"a=msid:");if(1===t.length)return{stream:(e=t[0].substr(7).split(" "))[0],track:e[1]};var n=a.matchPrefix(r,"a=ssrc:").map((function(r){return a.parseSsrcMedia(r)})).filter((function(r){return"msid"===r.attribute}));return n.length>0?{stream:(e=n[0].value.split(" "))[0],track:e[1]}:void 0},a.parseSctpDescription=function(r){var e,t=a.parseMLine(r),n=a.matchPrefix(r,"a=max-message-size:");n.length>0&&(e=parseInt(n[0].substr(19),10)),isNaN(e)&&(e=65536);var s=a.matchPrefix(r,"a=sctp-port:");if(s.length>0)return{port:parseInt(s[0].substr(12),10),protocol:t.fmt,maxMessageSize:e};if(a.matchPrefix(r,"a=sctpmap:").length>0){var i=a.matchPrefix(r,"a=sctpmap:")[0].substr(10).split(" ");return{port:parseInt(i[0],10),protocol:i[1],maxMessageSize:e}}},a.writeSctpDescription=function(r,e){var t=[];return t="DTLS/SCTP"!==r.protocol?["m="+r.kind+" 9 "+r.protocol+" "+e.protocol+"\r\n","c=IN IP4 0.0.0.0\r\n","a=sctp-port:"+e.port+"\r\n"]:["m="+r.kind+" 9 "+r.protocol+" "+e.port+"\r\n","c=IN IP4 0.0.0.0\r\n","a=sctpmap:"+e.port+" "+e.protocol+" 65535\r\n"],void 0!==e.maxMessageSize&&t.push("a=max-message-size:"+e.maxMessageSize+"\r\n"),t.join("")},a.generateSessionId=function(){return Math.random().toString().substr(2,21)},a.writeSessionBoilerplate=function(r,e,t){var n=void 0!==e?e:2;return"v=0\r\no="+(t||"thisisadapterortc")+" "+(r||a.generateSessionId())+" "+n+" IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\n"},a.writeMediaSection=function(r,e,t,n){var s=a.writeRtpDescription(r.kind,e);if(s+=a.writeIceParameters(r.iceGatherer.getLocalParameters()),s+=a.writeDtlsParameters(r.dtlsTransport.getLocalParameters(),"offer"===t?"actpass":"active"),s+="a=mid:"+r.mid+"\r\n",r.direction?s+="a="+r.direction+"\r\n":r.rtpSender&&r.rtpReceiver?s+="a=sendrecv\r\n":r.rtpSender?s+="a=sendonly\r\n":r.rtpReceiver?s+="a=recvonly\r\n":s+="a=inactive\r\n",r.rtpSender){var i="msid:"+n.id+" "+r.rtpSender.track.id+"\r\n";s+="a="+i,s+="a=ssrc:"+r.sendEncodingParameters[0].ssrc+" "+i,r.sendEncodingParameters[0].rtx&&(s+="a=ssrc:"+r.sendEncodingParameters[0].rtx.ssrc+" "+i,s+="a=ssrc-group:FID "+r.sendEncodingParameters[0].ssrc+" "+r.sendEncodingParameters[0].rtx.ssrc+"\r\n")}return s+="a=ssrc:"+r.sendEncodingParameters[0].ssrc+" cname:"+a.localCName+"\r\n",r.rtpSender&&r.sendEncodingParameters[0].rtx&&(s+="a=ssrc:"+r.sendEncodingParameters[0].rtx.ssrc+" cname:"+a.localCName+"\r\n"),s},a.getDirection=function(r,e){for(var t=a.splitLines(r),n=0;n<t.length;n++)switch(t[n]){case"a=sendrecv":case"a=sendonly":case"a=recvonly":case"a=inactive":return t[n].substr(2)}return e?a.getDirection(e):"sendrecv"},a.getKind=function(r){return a.splitLines(r)[0].split(" ")[0].substr(2)},a.isRejected=function(r){return"0"===r.split(" ",2)[1]},a.parseMLine=function(r){var e=a.splitLines(r)[0].substr(2).split(" ");return{kind:e[0],port:parseInt(e[1],10),protocol:e[2],fmt:e.slice(3).join(" ")}},a.parseOLine=function(r){var e=a.matchPrefix(r,"o=")[0].substr(2).split(" ");return{username:e[0],sessionId:e[1],sessionVersion:parseInt(e[2],10),netType:e[3],addressType:e[4],address:e[5]}},a.isValidSDP=function(r){if("string"!=typeof r||0===r.length)return!1;for(var e=a.splitLines(r),t=0;t<e.length;t++)if(e[t].length<2||"="!==e[t].charAt(1))return!1;return!0},r.exports=a}}]);
//# sourceMappingURL=41.9477dc039f89c934bafe.js.map