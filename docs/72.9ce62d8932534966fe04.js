(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{708:function(e,t,r){"use strict";var n=r(616);function a(e,t,r,a,i){var s=n.writeRtpDescription(e.kind,t);if(s+=n.writeIceParameters(e.iceGatherer.getLocalParameters()),s+=n.writeDtlsParameters(e.dtlsTransport.getLocalParameters(),"offer"===r?"actpass":i||"active"),s+="a=mid:"+e.mid+"\r\n",e.rtpSender&&e.rtpReceiver?s+="a=sendrecv\r\n":e.rtpSender?s+="a=sendonly\r\n":e.rtpReceiver?s+="a=recvonly\r\n":s+="a=inactive\r\n",e.rtpSender){var o=e.rtpSender._initialTrackId||e.rtpSender.track.id;e.rtpSender._initialTrackId=o;var c="msid:"+(a?a.id:"-")+" "+o+"\r\n";s+="a="+c,s+="a=ssrc:"+e.sendEncodingParameters[0].ssrc+" "+c,e.sendEncodingParameters[0].rtx&&(s+="a=ssrc:"+e.sendEncodingParameters[0].rtx.ssrc+" "+c,s+="a=ssrc-group:FID "+e.sendEncodingParameters[0].ssrc+" "+e.sendEncodingParameters[0].rtx.ssrc+"\r\n")}return s+="a=ssrc:"+e.sendEncodingParameters[0].ssrc+" cname:"+n.localCName+"\r\n",e.rtpSender&&e.sendEncodingParameters[0].rtx&&(s+="a=ssrc:"+e.sendEncodingParameters[0].rtx.ssrc+" cname:"+n.localCName+"\r\n"),s}function i(e,t){var r={codecs:[],headerExtensions:[],fecMechanisms:[]},n=function(e,t){e=parseInt(e,10);for(var r=0;r<t.length;r++)if(t[r].payloadType===e||t[r].preferredPayloadType===e)return t[r]},a=function(e,t,r,a){var i=n(e.parameters.apt,r),s=n(t.parameters.apt,a);return i&&s&&i.name.toLowerCase()===s.name.toLowerCase()};return e.codecs.forEach((function(n){for(var i=0;i<t.codecs.length;i++){var s=t.codecs[i];if(n.name.toLowerCase()===s.name.toLowerCase()&&n.clockRate===s.clockRate){if("rtx"===n.name.toLowerCase()&&n.parameters&&s.parameters.apt&&!a(n,s,e.codecs,t.codecs))continue;(s=JSON.parse(JSON.stringify(s))).numChannels=Math.min(n.numChannels,s.numChannels),r.codecs.push(s),s.rtcpFeedback=s.rtcpFeedback.filter((function(e){for(var t=0;t<n.rtcpFeedback.length;t++)if(n.rtcpFeedback[t].type===e.type&&n.rtcpFeedback[t].parameter===e.parameter)return!0;return!1}));break}}})),e.headerExtensions.forEach((function(e){for(var n=0;n<t.headerExtensions.length;n++){var a=t.headerExtensions[n];if(e.uri===a.uri){r.headerExtensions.push(a);break}}})),r}function s(e,t,r){return-1!=={offer:{setLocalDescription:["stable","have-local-offer"],setRemoteDescription:["stable","have-remote-offer"]},answer:{setLocalDescription:["have-remote-offer","have-local-pranswer"],setRemoteDescription:["have-local-offer","have-remote-pranswer"]}}[t][e].indexOf(r)}function o(e,t){var r=e.getRemoteCandidates().find((function(e){return t.foundation===e.foundation&&t.ip===e.ip&&t.port===e.port&&t.priority===e.priority&&t.protocol===e.protocol&&t.type===e.type}));return r||e.addRemoteCandidate(t),!r}function c(e,t){var r=new Error(t);return r.name=e,r.code={NotSupportedError:9,InvalidStateError:11,InvalidAccessError:15,TypeError:void 0,OperationError:void 0}[e],r}e.exports=function(e,t){function r(t,r){r.addTrack(t),r.dispatchEvent(new e.MediaStreamTrackEvent("addtrack",{track:t}))}function d(t,r,n,a){var i=new Event("track");i.track=r,i.receiver=n,i.transceiver={receiver:n},i.streams=a,e.setTimeout((function(){t._dispatchEvent("track",i)}))}var p=function(r){var a=this,i=document.createDocumentFragment();if(["addEventListener","removeEventListener","dispatchEvent"].forEach((function(e){a[e]=i[e].bind(i)})),this.canTrickleIceCandidates=null,this.needNegotiation=!1,this.localStreams=[],this.remoteStreams=[],this._localDescription=null,this._remoteDescription=null,this.signalingState="stable",this.iceConnectionState="new",this.connectionState="new",this.iceGatheringState="new",r=JSON.parse(JSON.stringify(r||{})),this.usingBundle="max-bundle"===r.bundlePolicy,"negotiate"===r.rtcpMuxPolicy)throw c("NotSupportedError","rtcpMuxPolicy 'negotiate' is not supported");switch(r.rtcpMuxPolicy||(r.rtcpMuxPolicy="require"),r.iceTransportPolicy){case"all":case"relay":break;default:r.iceTransportPolicy="all"}switch(r.bundlePolicy){case"balanced":case"max-compat":case"max-bundle":break;default:r.bundlePolicy="balanced"}if(r.iceServers=function(e,t){var r=!1;return(e=JSON.parse(JSON.stringify(e))).filter((function(e){if(e&&(e.urls||e.url)){var n=e.urls||e.url;e.url&&!e.urls&&console.warn("RTCIceServer.url is deprecated! Use urls instead.");var a="string"==typeof n;return a&&(n=[n]),n=n.filter((function(e){return 0===e.indexOf("turn:")&&-1!==e.indexOf("transport=udp")&&-1===e.indexOf("turn:[")&&!r?(r=!0,!0):0===e.indexOf("stun:")&&t>=14393&&-1===e.indexOf("?transport=udp")})),delete e.url,e.urls=a?n[0]:n,!!n.length}}))}(r.iceServers||[],t),this._iceGatherers=[],r.iceCandidatePoolSize)for(var s=r.iceCandidatePoolSize;s>0;s--)this._iceGatherers.push(new e.RTCIceGatherer({iceServers:r.iceServers,gatherPolicy:r.iceTransportPolicy}));else r.iceCandidatePoolSize=0;this._config=r,this.transceivers=[],this._sdpSessionId=n.generateSessionId(),this._sdpSessionVersion=0,this._dtlsRole=void 0,this._isClosed=!1};Object.defineProperty(p.prototype,"localDescription",{configurable:!0,get:function(){return this._localDescription}}),Object.defineProperty(p.prototype,"remoteDescription",{configurable:!0,get:function(){return this._remoteDescription}}),p.prototype.onicecandidate=null,p.prototype.onaddstream=null,p.prototype.ontrack=null,p.prototype.onremovestream=null,p.prototype.onsignalingstatechange=null,p.prototype.oniceconnectionstatechange=null,p.prototype.onconnectionstatechange=null,p.prototype.onicegatheringstatechange=null,p.prototype.onnegotiationneeded=null,p.prototype.ondatachannel=null,p.prototype._dispatchEvent=function(e,t){this._isClosed||(this.dispatchEvent(t),"function"==typeof this["on"+e]&&this["on"+e](t))},p.prototype._emitGatheringStateChange=function(){var e=new Event("icegatheringstatechange");this._dispatchEvent("icegatheringstatechange",e)},p.prototype.getConfiguration=function(){return this._config},p.prototype.getLocalStreams=function(){return this.localStreams},p.prototype.getRemoteStreams=function(){return this.remoteStreams},p.prototype._createTransceiver=function(e,t){var r=this.transceivers.length>0,n={track:null,iceGatherer:null,iceTransport:null,dtlsTransport:null,localCapabilities:null,remoteCapabilities:null,rtpSender:null,rtpReceiver:null,kind:e,mid:null,sendEncodingParameters:null,recvEncodingParameters:null,stream:null,associatedRemoteMediaStreams:[],wantReceive:!0};if(this.usingBundle&&r)n.iceTransport=this.transceivers[0].iceTransport,n.dtlsTransport=this.transceivers[0].dtlsTransport;else{var a=this._createIceAndDtlsTransports();n.iceTransport=a.iceTransport,n.dtlsTransport=a.dtlsTransport}return t||this.transceivers.push(n),n},p.prototype.addTrack=function(t,r){if(this._isClosed)throw c("InvalidStateError","Attempted to call addTrack on a closed peerconnection.");var n;if(this.transceivers.find((function(e){return e.track===t})))throw c("InvalidAccessError","Track already exists.");for(var a=0;a<this.transceivers.length;a++)this.transceivers[a].track||this.transceivers[a].kind!==t.kind||(n=this.transceivers[a]);return n||(n=this._createTransceiver(t.kind)),this._maybeFireNegotiationNeeded(),-1===this.localStreams.indexOf(r)&&this.localStreams.push(r),n.track=t,n.stream=r,n.rtpSender=new e.RTCRtpSender(t,n.dtlsTransport),n.rtpSender},p.prototype.addStream=function(e){var r=this;if(t>=15025)e.getTracks().forEach((function(t){r.addTrack(t,e)}));else{var n=e.clone();e.getTracks().forEach((function(e,t){var r=n.getTracks()[t];e.addEventListener("enabled",(function(e){r.enabled=e.enabled}))})),n.getTracks().forEach((function(e){r.addTrack(e,n)}))}},p.prototype.removeTrack=function(t){if(this._isClosed)throw c("InvalidStateError","Attempted to call removeTrack on a closed peerconnection.");if(!(t instanceof e.RTCRtpSender))throw new TypeError("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.");var r=this.transceivers.find((function(e){return e.rtpSender===t}));if(!r)throw c("InvalidAccessError","Sender was not created by this connection.");var n=r.stream;r.rtpSender.stop(),r.rtpSender=null,r.track=null,r.stream=null,-1===this.transceivers.map((function(e){return e.stream})).indexOf(n)&&this.localStreams.indexOf(n)>-1&&this.localStreams.splice(this.localStreams.indexOf(n),1),this._maybeFireNegotiationNeeded()},p.prototype.removeStream=function(e){var t=this;e.getTracks().forEach((function(e){var r=t.getSenders().find((function(t){return t.track===e}));r&&t.removeTrack(r)}))},p.prototype.getSenders=function(){return this.transceivers.filter((function(e){return!!e.rtpSender})).map((function(e){return e.rtpSender}))},p.prototype.getReceivers=function(){return this.transceivers.filter((function(e){return!!e.rtpReceiver})).map((function(e){return e.rtpReceiver}))},p.prototype._createIceGatherer=function(t,r){var n=this;if(r&&t>0)return this.transceivers[0].iceGatherer;if(this._iceGatherers.length)return this._iceGatherers.shift();var a=new e.RTCIceGatherer({iceServers:this._config.iceServers,gatherPolicy:this._config.iceTransportPolicy});return Object.defineProperty(a,"state",{value:"new",writable:!0}),this.transceivers[t].bufferedCandidateEvents=[],this.transceivers[t].bufferCandidates=function(e){var r=!e.candidate||0===Object.keys(e.candidate).length;a.state=r?"completed":"gathering",null!==n.transceivers[t].bufferedCandidateEvents&&n.transceivers[t].bufferedCandidateEvents.push(e)},a.addEventListener("localcandidate",this.transceivers[t].bufferCandidates),a},p.prototype._gather=function(t,r){var a=this,i=this.transceivers[r].iceGatherer;if(!i.onlocalcandidate){var s=this.transceivers[r].bufferedCandidateEvents;this.transceivers[r].bufferedCandidateEvents=null,i.removeEventListener("localcandidate",this.transceivers[r].bufferCandidates),i.onlocalcandidate=function(e){if(!(a.usingBundle&&r>0)){var s=new Event("icecandidate");s.candidate={sdpMid:t,sdpMLineIndex:r};var o=e.candidate,c=!o||0===Object.keys(o).length;if(c)"new"!==i.state&&"gathering"!==i.state||(i.state="completed");else{"new"===i.state&&(i.state="gathering"),o.component=1,o.ufrag=i.getLocalParameters().usernameFragment;var d=n.writeCandidate(o);s.candidate=Object.assign(s.candidate,n.parseCandidate(d)),s.candidate.candidate=d,s.candidate.toJSON=function(){return{candidate:s.candidate.candidate,sdpMid:s.candidate.sdpMid,sdpMLineIndex:s.candidate.sdpMLineIndex,usernameFragment:s.candidate.usernameFragment}}}var p=n.getMediaSections(a._localDescription.sdp);p[s.candidate.sdpMLineIndex]+=c?"a=end-of-candidates\r\n":"a="+s.candidate.candidate+"\r\n",a._localDescription.sdp=n.getDescription(a._localDescription.sdp)+p.join("");var l=a.transceivers.every((function(e){return e.iceGatherer&&"completed"===e.iceGatherer.state}));"gathering"!==a.iceGatheringState&&(a.iceGatheringState="gathering",a._emitGatheringStateChange()),c||a._dispatchEvent("icecandidate",s),l&&(a._dispatchEvent("icecandidate",new Event("icecandidate")),a.iceGatheringState="complete",a._emitGatheringStateChange())}},e.setTimeout((function(){s.forEach((function(e){i.onlocalcandidate(e)}))}),0)}},p.prototype._createIceAndDtlsTransports=function(){var t=this,r=new e.RTCIceTransport(null);r.onicestatechange=function(){t._updateIceConnectionState(),t._updateConnectionState()};var n=new e.RTCDtlsTransport(r);return n.ondtlsstatechange=function(){t._updateConnectionState()},n.onerror=function(){Object.defineProperty(n,"state",{value:"failed",writable:!0}),t._updateConnectionState()},{iceTransport:r,dtlsTransport:n}},p.prototype._disposeIceAndDtlsTransports=function(e){var t=this.transceivers[e].iceGatherer;t&&(delete t.onlocalcandidate,delete this.transceivers[e].iceGatherer);var r=this.transceivers[e].iceTransport;r&&(delete r.onicestatechange,delete this.transceivers[e].iceTransport);var n=this.transceivers[e].dtlsTransport;n&&(delete n.ondtlsstatechange,delete n.onerror,delete this.transceivers[e].dtlsTransport)},p.prototype._transceive=function(e,r,a){var s=i(e.localCapabilities,e.remoteCapabilities);r&&e.rtpSender&&(s.encodings=e.sendEncodingParameters,s.rtcp={cname:n.localCName,compound:e.rtcpParameters.compound},e.recvEncodingParameters.length&&(s.rtcp.ssrc=e.recvEncodingParameters[0].ssrc),e.rtpSender.send(s)),a&&e.rtpReceiver&&s.codecs.length>0&&("video"===e.kind&&e.recvEncodingParameters&&t<15019&&e.recvEncodingParameters.forEach((function(e){delete e.rtx})),e.recvEncodingParameters.length?s.encodings=e.recvEncodingParameters:s.encodings=[{}],s.rtcp={compound:e.rtcpParameters.compound},e.rtcpParameters.cname&&(s.rtcp.cname=e.rtcpParameters.cname),e.sendEncodingParameters.length&&(s.rtcp.ssrc=e.sendEncodingParameters[0].ssrc),e.rtpReceiver.receive(s))},p.prototype.setLocalDescription=function(e){var t,r,a=this;if(-1===["offer","answer"].indexOf(e.type))return Promise.reject(c("TypeError",'Unsupported type "'+e.type+'"'));if(!s("setLocalDescription",e.type,a.signalingState)||a._isClosed)return Promise.reject(c("InvalidStateError","Can not set local "+e.type+" in state "+a.signalingState));if("offer"===e.type)t=n.splitSections(e.sdp),r=t.shift(),t.forEach((function(e,t){var r=n.parseRtpParameters(e);a.transceivers[t].localCapabilities=r})),a.transceivers.forEach((function(e,t){a._gather(e.mid,t)}));else if("answer"===e.type){t=n.splitSections(a._remoteDescription.sdp),r=t.shift();var o=n.matchPrefix(r,"a=ice-lite").length>0;t.forEach((function(e,t){var s=a.transceivers[t],c=s.iceGatherer,d=s.iceTransport,p=s.dtlsTransport,l=s.localCapabilities,f=s.remoteCapabilities;if(!(n.isRejected(e)&&0===n.matchPrefix(e,"a=bundle-only").length)&&!s.rejected){var u=n.getIceParameters(e,r),v=n.getDtlsParameters(e,r);o&&(v.role="server"),a.usingBundle&&0!==t||(a._gather(s.mid,t),"new"===d.state&&d.start(c,u,o?"controlling":"controlled"),"new"===p.state&&p.start(v));var h=i(l,f);a._transceive(s,h.codecs.length>0,!1)}}))}return a._localDescription={type:e.type,sdp:e.sdp},"offer"===e.type?a._updateSignalingState("have-local-offer"):a._updateSignalingState("stable"),Promise.resolve()},p.prototype.setRemoteDescription=function(a){var p=this;if(-1===["offer","answer"].indexOf(a.type))return Promise.reject(c("TypeError",'Unsupported type "'+a.type+'"'));if(!s("setRemoteDescription",a.type,p.signalingState)||p._isClosed)return Promise.reject(c("InvalidStateError","Can not set remote "+a.type+" in state "+p.signalingState));var l={};p.remoteStreams.forEach((function(e){l[e.id]=e}));var f=[],u=n.splitSections(a.sdp),v=u.shift(),h=n.matchPrefix(v,"a=ice-lite").length>0,m=n.matchPrefix(v,"a=group:BUNDLE ").length>0;p.usingBundle=m;var g=n.matchPrefix(v,"a=ice-options:")[0];return p.canTrickleIceCandidates=!!g&&g.substr(14).split(" ").indexOf("trickle")>=0,u.forEach((function(s,c){var d=n.splitLines(s),u=n.getKind(s),g=n.isRejected(s)&&0===n.matchPrefix(s,"a=bundle-only").length,y=d[0].substr(2).split(" ")[2],S=n.getDirection(s,v),T=n.parseMsid(s),E=n.getMid(s)||n.generateIdentifier();if(g||"application"===u&&("DTLS/SCTP"===y||"UDP/DTLS/SCTP"===y))p.transceivers[c]={mid:E,kind:u,protocol:y,rejected:!0};else{var C,P,w,R,_,k,b,x,D;!g&&p.transceivers[c]&&p.transceivers[c].rejected&&(p.transceivers[c]=p._createTransceiver(u,!0));var I,L,M=n.parseRtpParameters(s);g||(I=n.getIceParameters(s,v),(L=n.getDtlsParameters(s,v)).role="client"),b=n.parseRtpEncodingParameters(s);var O=n.parseRtcpParameters(s),G=n.matchPrefix(s,"a=end-of-candidates",v).length>0,j=n.matchPrefix(s,"a=candidate:").map((function(e){return n.parseCandidate(e)})).filter((function(e){return 1===e.component}));if(("offer"===a.type||"answer"===a.type)&&!g&&m&&c>0&&p.transceivers[c]&&(p._disposeIceAndDtlsTransports(c),p.transceivers[c].iceGatherer=p.transceivers[0].iceGatherer,p.transceivers[c].iceTransport=p.transceivers[0].iceTransport,p.transceivers[c].dtlsTransport=p.transceivers[0].dtlsTransport,p.transceivers[c].rtpSender&&p.transceivers[c].rtpSender.setTransport(p.transceivers[0].dtlsTransport),p.transceivers[c].rtpReceiver&&p.transceivers[c].rtpReceiver.setTransport(p.transceivers[0].dtlsTransport)),"offer"!==a.type||g){if("answer"===a.type&&!g){P=(C=p.transceivers[c]).iceGatherer,w=C.iceTransport,R=C.dtlsTransport,_=C.rtpReceiver,k=C.sendEncodingParameters,x=C.localCapabilities,p.transceivers[c].recvEncodingParameters=b,p.transceivers[c].remoteCapabilities=M,p.transceivers[c].rtcpParameters=O,j.length&&"new"===w.state&&(!h&&!G||m&&0!==c?j.forEach((function(e){o(C.iceTransport,e)})):w.setRemoteCandidates(j)),m&&0!==c||("new"===w.state&&w.start(P,I,"controlling"),"new"===R.state&&R.start(L)),!i(C.localCapabilities,C.remoteCapabilities).codecs.filter((function(e){return"rtx"===e.name.toLowerCase()})).length&&C.sendEncodingParameters[0].rtx&&delete C.sendEncodingParameters[0].rtx,p._transceive(C,"sendrecv"===S||"recvonly"===S,"sendrecv"===S||"sendonly"===S),!_||"sendrecv"!==S&&"sendonly"!==S?delete C.rtpReceiver:(D=_.track,T?(l[T.stream]||(l[T.stream]=new e.MediaStream),r(D,l[T.stream]),f.push([D,_,l[T.stream]])):(l.default||(l.default=new e.MediaStream),r(D,l.default),f.push([D,_,l.default])))}}else{(C=p.transceivers[c]||p._createTransceiver(u)).mid=E,C.iceGatherer||(C.iceGatherer=p._createIceGatherer(c,m)),j.length&&"new"===C.iceTransport.state&&(!G||m&&0!==c?j.forEach((function(e){o(C.iceTransport,e)})):C.iceTransport.setRemoteCandidates(j)),x=e.RTCRtpReceiver.getCapabilities(u),t<15019&&(x.codecs=x.codecs.filter((function(e){return"rtx"!==e.name}))),k=C.sendEncodingParameters||[{ssrc:1001*(2*c+2)}];var N,A=!1;if("sendrecv"===S||"sendonly"===S){if(A=!C.rtpReceiver,_=C.rtpReceiver||new e.RTCRtpReceiver(C.dtlsTransport,u),A)D=_.track,T&&"-"===T.stream||(T?(l[T.stream]||(l[T.stream]=new e.MediaStream,Object.defineProperty(l[T.stream],"id",{get:function(){return T.stream}})),Object.defineProperty(D,"id",{get:function(){return T.track}}),N=l[T.stream]):(l.default||(l.default=new e.MediaStream),N=l.default)),N&&(r(D,N),C.associatedRemoteMediaStreams.push(N)),f.push([D,_,N])}else C.rtpReceiver&&C.rtpReceiver.track&&(C.associatedRemoteMediaStreams.forEach((function(t){var r=t.getTracks().find((function(e){return e.id===C.rtpReceiver.track.id}));r&&function(t,r){r.removeTrack(t),r.dispatchEvent(new e.MediaStreamTrackEvent("removetrack",{track:t}))}(r,t)})),C.associatedRemoteMediaStreams=[]);C.localCapabilities=x,C.remoteCapabilities=M,C.rtpReceiver=_,C.rtcpParameters=O,C.sendEncodingParameters=k,C.recvEncodingParameters=b,p._transceive(p.transceivers[c],!1,A)}}})),void 0===p._dtlsRole&&(p._dtlsRole="offer"===a.type?"active":"passive"),p._remoteDescription={type:a.type,sdp:a.sdp},"offer"===a.type?p._updateSignalingState("have-remote-offer"):p._updateSignalingState("stable"),Object.keys(l).forEach((function(t){var r=l[t];if(r.getTracks().length){if(-1===p.remoteStreams.indexOf(r)){p.remoteStreams.push(r);var n=new Event("addstream");n.stream=r,e.setTimeout((function(){p._dispatchEvent("addstream",n)}))}f.forEach((function(e){var t=e[0],n=e[1];r.id===e[2].id&&d(p,t,n,[r])}))}})),f.forEach((function(e){e[2]||d(p,e[0],e[1],[])})),e.setTimeout((function(){p&&p.transceivers&&p.transceivers.forEach((function(e){e.iceTransport&&"new"===e.iceTransport.state&&e.iceTransport.getRemoteCandidates().length>0&&(console.warn("Timeout for addRemoteCandidate. Consider sending an end-of-candidates notification"),e.iceTransport.addRemoteCandidate({}))}))}),4e3),Promise.resolve()},p.prototype.close=function(){this.transceivers.forEach((function(e){e.iceTransport&&e.iceTransport.stop(),e.dtlsTransport&&e.dtlsTransport.stop(),e.rtpSender&&e.rtpSender.stop(),e.rtpReceiver&&e.rtpReceiver.stop()})),this._isClosed=!0,this._updateSignalingState("closed")},p.prototype._updateSignalingState=function(e){this.signalingState=e;var t=new Event("signalingstatechange");this._dispatchEvent("signalingstatechange",t)},p.prototype._maybeFireNegotiationNeeded=function(){var t=this;"stable"===this.signalingState&&!0!==this.needNegotiation&&(this.needNegotiation=!0,e.setTimeout((function(){if(t.needNegotiation){t.needNegotiation=!1;var e=new Event("negotiationneeded");t._dispatchEvent("negotiationneeded",e)}}),0))},p.prototype._updateIceConnectionState=function(){var e,t={new:0,closed:0,checking:0,connected:0,completed:0,disconnected:0,failed:0};if(this.transceivers.forEach((function(e){e.iceTransport&&!e.rejected&&t[e.iceTransport.state]++})),e="new",t.failed>0?e="failed":t.checking>0?e="checking":t.disconnected>0?e="disconnected":t.new>0?e="new":t.connected>0?e="connected":t.completed>0&&(e="completed"),e!==this.iceConnectionState){this.iceConnectionState=e;var r=new Event("iceconnectionstatechange");this._dispatchEvent("iceconnectionstatechange",r)}},p.prototype._updateConnectionState=function(){var e,t={new:0,closed:0,connecting:0,connected:0,completed:0,disconnected:0,failed:0};if(this.transceivers.forEach((function(e){e.iceTransport&&e.dtlsTransport&&!e.rejected&&(t[e.iceTransport.state]++,t[e.dtlsTransport.state]++)})),t.connected+=t.completed,e="new",t.failed>0?e="failed":t.connecting>0?e="connecting":t.disconnected>0?e="disconnected":t.new>0?e="new":t.connected>0&&(e="connected"),e!==this.connectionState){this.connectionState=e;var r=new Event("connectionstatechange");this._dispatchEvent("connectionstatechange",r)}},p.prototype.createOffer=function(){var r=this;if(r._isClosed)return Promise.reject(c("InvalidStateError","Can not call createOffer after close"));var i=r.transceivers.filter((function(e){return"audio"===e.kind})).length,s=r.transceivers.filter((function(e){return"video"===e.kind})).length,o=arguments[0];if(o){if(o.mandatory||o.optional)throw new TypeError("Legacy mandatory/optional constraints not supported.");void 0!==o.offerToReceiveAudio&&(i=!0===o.offerToReceiveAudio?1:!1===o.offerToReceiveAudio?0:o.offerToReceiveAudio),void 0!==o.offerToReceiveVideo&&(s=!0===o.offerToReceiveVideo?1:!1===o.offerToReceiveVideo?0:o.offerToReceiveVideo)}for(r.transceivers.forEach((function(e){"audio"===e.kind?--i<0&&(e.wantReceive=!1):"video"===e.kind&&--s<0&&(e.wantReceive=!1)}));i>0||s>0;)i>0&&(r._createTransceiver("audio"),i--),s>0&&(r._createTransceiver("video"),s--);var d=n.writeSessionBoilerplate(r._sdpSessionId,r._sdpSessionVersion++);r.transceivers.forEach((function(a,i){var s=a.track,o=a.kind,c=a.mid||n.generateIdentifier();a.mid=c,a.iceGatherer||(a.iceGatherer=r._createIceGatherer(i,r.usingBundle));var d=e.RTCRtpSender.getCapabilities(o);t<15019&&(d.codecs=d.codecs.filter((function(e){return"rtx"!==e.name}))),d.codecs.forEach((function(e){"H264"===e.name&&void 0===e.parameters["level-asymmetry-allowed"]&&(e.parameters["level-asymmetry-allowed"]="1"),a.remoteCapabilities&&a.remoteCapabilities.codecs&&a.remoteCapabilities.codecs.forEach((function(t){e.name.toLowerCase()===t.name.toLowerCase()&&e.clockRate===t.clockRate&&(e.preferredPayloadType=t.payloadType)}))})),d.headerExtensions.forEach((function(e){(a.remoteCapabilities&&a.remoteCapabilities.headerExtensions||[]).forEach((function(t){e.uri===t.uri&&(e.id=t.id)}))}));var p=a.sendEncodingParameters||[{ssrc:1001*(2*i+1)}];s&&t>=15019&&"video"===o&&!p[0].rtx&&(p[0].rtx={ssrc:p[0].ssrc+1}),a.wantReceive&&(a.rtpReceiver=new e.RTCRtpReceiver(a.dtlsTransport,o)),a.localCapabilities=d,a.sendEncodingParameters=p})),"max-compat"!==r._config.bundlePolicy&&(d+="a=group:BUNDLE "+r.transceivers.map((function(e){return e.mid})).join(" ")+"\r\n"),d+="a=ice-options:trickle\r\n",r.transceivers.forEach((function(e,t){d+=a(e,e.localCapabilities,"offer",e.stream,r._dtlsRole),d+="a=rtcp-rsize\r\n",!e.iceGatherer||"new"===r.iceGatheringState||0!==t&&r.usingBundle||(e.iceGatherer.getLocalCandidates().forEach((function(e){e.component=1,d+="a="+n.writeCandidate(e)+"\r\n"})),"completed"===e.iceGatherer.state&&(d+="a=end-of-candidates\r\n"))}));var p=new e.RTCSessionDescription({type:"offer",sdp:d});return Promise.resolve(p)},p.prototype.createAnswer=function(){var r=this;if(r._isClosed)return Promise.reject(c("InvalidStateError","Can not call createAnswer after close"));if("have-remote-offer"!==r.signalingState&&"have-local-pranswer"!==r.signalingState)return Promise.reject(c("InvalidStateError","Can not call createAnswer in signalingState "+r.signalingState));var s=n.writeSessionBoilerplate(r._sdpSessionId,r._sdpSessionVersion++);r.usingBundle&&(s+="a=group:BUNDLE "+r.transceivers.map((function(e){return e.mid})).join(" ")+"\r\n"),s+="a=ice-options:trickle\r\n";var o=n.getMediaSections(r._remoteDescription.sdp).length;r.transceivers.forEach((function(e,n){if(!(n+1>o)){if(e.rejected)return"application"===e.kind?"DTLS/SCTP"===e.protocol?s+="m=application 0 DTLS/SCTP 5000\r\n":s+="m=application 0 "+e.protocol+" webrtc-datachannel\r\n":"audio"===e.kind?s+="m=audio 0 UDP/TLS/RTP/SAVPF 0\r\na=rtpmap:0 PCMU/8000\r\n":"video"===e.kind&&(s+="m=video 0 UDP/TLS/RTP/SAVPF 120\r\na=rtpmap:120 VP8/90000\r\n"),void(s+="c=IN IP4 0.0.0.0\r\na=inactive\r\na=mid:"+e.mid+"\r\n");var c;if(e.stream)"audio"===e.kind?c=e.stream.getAudioTracks()[0]:"video"===e.kind&&(c=e.stream.getVideoTracks()[0]),c&&t>=15019&&"video"===e.kind&&!e.sendEncodingParameters[0].rtx&&(e.sendEncodingParameters[0].rtx={ssrc:e.sendEncodingParameters[0].ssrc+1});var d=i(e.localCapabilities,e.remoteCapabilities);!d.codecs.filter((function(e){return"rtx"===e.name.toLowerCase()})).length&&e.sendEncodingParameters[0].rtx&&delete e.sendEncodingParameters[0].rtx,s+=a(e,d,"answer",e.stream,r._dtlsRole),e.rtcpParameters&&e.rtcpParameters.reducedSize&&(s+="a=rtcp-rsize\r\n")}}));var d=new e.RTCSessionDescription({type:"answer",sdp:s});return Promise.resolve(d)},p.prototype.addIceCandidate=function(e){var t,r=this;return e&&void 0===e.sdpMLineIndex&&!e.sdpMid?Promise.reject(new TypeError("sdpMLineIndex or sdpMid required")):new Promise((function(a,i){if(!r._remoteDescription)return i(c("InvalidStateError","Can not add ICE candidate without a remote description"));if(e&&""!==e.candidate){var s=e.sdpMLineIndex;if(e.sdpMid)for(var d=0;d<r.transceivers.length;d++)if(r.transceivers[d].mid===e.sdpMid){s=d;break}var p=r.transceivers[s];if(!p)return i(c("OperationError","Can not add ICE candidate"));if(p.rejected)return a();var l=Object.keys(e.candidate).length>0?n.parseCandidate(e.candidate):{};if("tcp"===l.protocol&&(0===l.port||9===l.port))return a();if(l.component&&1!==l.component)return a();if((0===s||s>0&&p.iceTransport!==r.transceivers[0].iceTransport)&&!o(p.iceTransport,l))return i(c("OperationError","Can not add ICE candidate"));var f=e.candidate.trim();0===f.indexOf("a=")&&(f=f.substr(2)),(t=n.getMediaSections(r._remoteDescription.sdp))[s]+="a="+(l.type?f:"end-of-candidates")+"\r\n",r._remoteDescription.sdp=n.getDescription(r._remoteDescription.sdp)+t.join("")}else for(var u=0;u<r.transceivers.length&&(r.transceivers[u].rejected||(r.transceivers[u].iceTransport.addRemoteCandidate({}),(t=n.getMediaSections(r._remoteDescription.sdp))[u]+="a=end-of-candidates\r\n",r._remoteDescription.sdp=n.getDescription(r._remoteDescription.sdp)+t.join(""),!r.usingBundle));u++);a()}))},p.prototype.getStats=function(t){if(t&&t instanceof e.MediaStreamTrack){var r=null;if(this.transceivers.forEach((function(e){e.rtpSender&&e.rtpSender.track===t?r=e.rtpSender:e.rtpReceiver&&e.rtpReceiver.track===t&&(r=e.rtpReceiver)})),!r)throw c("InvalidAccessError","Invalid selector.");return r.getStats()}var n=[];return this.transceivers.forEach((function(e){["rtpSender","rtpReceiver","iceGatherer","iceTransport","dtlsTransport"].forEach((function(t){e[t]&&n.push(e[t].getStats())}))})),Promise.all(n).then((function(e){var t=new Map;return e.forEach((function(e){e.forEach((function(e){t.set(e.id,e)}))})),t}))};["RTCRtpSender","RTCRtpReceiver","RTCIceGatherer","RTCIceTransport","RTCDtlsTransport"].forEach((function(t){var r=e[t];if(r&&r.prototype&&r.prototype.getStats){var n=r.prototype.getStats;r.prototype.getStats=function(){return n.apply(this).then((function(e){var t=new Map;return Object.keys(e).forEach((function(r){var n;e[r].type={inboundrtp:"inbound-rtp",outboundrtp:"outbound-rtp",candidatepair:"candidate-pair",localcandidate:"local-candidate",remotecandidate:"remote-candidate"}[(n=e[r]).type]||n.type,t.set(r,e[r])})),t}))}}}));var l=["createOffer","createAnswer"];return l.forEach((function(e){var t=p.prototype[e];p.prototype[e]=function(){var e=arguments;return"function"==typeof e[0]||"function"==typeof e[1]?t.apply(this,[arguments[2]]).then((function(t){"function"==typeof e[0]&&e[0].apply(null,[t])}),(function(t){"function"==typeof e[1]&&e[1].apply(null,[t])})):t.apply(this,arguments)}})),(l=["setLocalDescription","setRemoteDescription","addIceCandidate"]).forEach((function(e){var t=p.prototype[e];p.prototype[e]=function(){var e=arguments;return"function"==typeof e[1]||"function"==typeof e[2]?t.apply(this,arguments).then((function(){"function"==typeof e[1]&&e[1].apply(null)}),(function(t){"function"==typeof e[2]&&e[2].apply(null,[t])})):t.apply(this,arguments)}})),["getStats"].forEach((function(e){var t=p.prototype[e];p.prototype[e]=function(){var e=arguments;return"function"==typeof e[1]?t.apply(this,arguments).then((function(){"function"==typeof e[1]&&e[1].apply(null)})):t.apply(this,arguments)}})),p}}}]);
//# sourceMappingURL=72.9ce62d8932534966fe04.js.map