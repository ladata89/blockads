var PROXY_DIRECT="DIRECT";
var DIRECT="DIRECT";
var BLACK="PROXY 8.8.8.8:53";
var WHITE=PROXY_DIRECT;
function s(u,r)
{return shExpMatch(u,r);}
function d(h,r){return dnsDomainIs(h,r);}
function n(h,r,m){return isInNet(h,r,m);}
function e(u){var h;if(u.indexOf("://")>-1){h=u.split('/')[2];}else{h=u.split('/')[0];}h=h.split(':')[0];var s=h.split('.').reverse();return s;}
function FindProxyForURL(url,host){var u=url.toLowerCase();var h=host.toLowerCase();var a=e(u);var b=a[0];var c=a[1];var f=c.length;var t=c[f-1];var z=c[f-2];if(d(host,"KjWfGD.configtest.wl.is")){return"PROXY 5.9.40.99:80";}if(d(h,"wl.is")||d(h,"weblockapp.com")){return PROXY_DIRECT;}if(b=="com"){if(t=="3"){if(d(h,"admtpmp123.com")||d(h,"wafmedia3.com"))return BLACK;}if(t=="2"){if(d(h,"aimg.fc2.com")||d(h,"adshost2.com")||d(h,"affiliate.fc2.com"))return BLACK;}if(t=="4"){if(d(h,"admtpmp124.com")||d(h,"clk1004.com"))return BLACK;}
if(t=="a"){if(z=="i"){if(d(h,"wigetmedia.com")||d(h,"xtendmedia.com")||d(h,"engine.a.redditmedia.com")||d(h,"tpc.googlesyndication.com")||d(h,"pagead2.googlesyndication.com")||d(h,"vdopia.com")||d(h,"adigi.icu")||d(h,"amazemobilemedia.com")||d(h,"lfstmedia.com")||d(h,"conversantmedia.com")||d(h,"cdn.millennialmedia.com")||d(h,"andomedia.com")||d(h,"tremormedia.com"))return BLACK;}else if(z=="v"){if(d(h,"kochava.com")||d(h,"adelva.com")||d(h,"mojiva.com"))return BLACK;}else if(d(h,"atemda.com")||d(h,"adtoma.com")||d(h,"bnmla.com")||d(h,"atwola.com")||d(h,"komoona.com")||d(h,"eclkmpsa.com")||d(h,"transpera.com")||d(h,"atedra.com")||d(h,"admeta.com")||d(h,"plista.com")||d(h,"videoplaza.com"))return BLACK;}if(t=="c"){if(z=="i"){if(d(h,"cxpublic.com")||d(h,"adsymptotic.com")||d(h,"pubmatic.com"))return BLACK;}else if(d(h,"contentabc.com")||d(h,"adztec.com"))return BLACK;}if(t=="b"){if(z=="a"){if(d(h,"bms.zeptolab.com")||d(h,"asp.animelab.com")||d(h,"crosspromo.zeptolab.com"))return BLACK;}else if(z=="u"){if(!s(u,"*filmon*")&&d(h,"mopub.com")||d(h,"m2pub.com")||d(h,"tremorhub.com"))return BLACK;}else if(z=="e"){if(d(h,"ucweb.com")||d(h,"sa.entireweb.com")||d(h,"ox\u002Dd.advanceweb.com"))return BLACK;}else if(z=="o"){if(d(h,"admob.com")||d(h,"hot\u002Dmob.com")||d(h,"revmob.com"))return BLACK;}}if(t=="e"){if(z=="c"){if(d(h,"adnetworkperformance.com")||d(h,"valuecommerce.com")||d(h,"widespace.com")||d(h,"startappservice.com")||d(h,"delivery.trafficforce.com"))return BLACK;}else if(z=="b"){if(d(h,"delivery.brokerbabe.com")||d(h,"adotube.com")||d(h,"youtube.com")&&s(u,"*/_get_ads*"))return BLACK;}else if(z=="g"){if(d(h,"bounceexchange.com")||s(u,"*admax*")&&d(h,"nexage.com")||d(h,"startappexchange.com")||d(h,"tradeadexchange.com"))return BLACK;}else if(z=="s"){if(d(h,"mobilefuse.com")||d(h,"trafficposse.com")||d(h,"adinfuse.com")||d(h,"clickfuse.com")||d(h,"adhese.com")||d(h,"postrelease.com")||d(h,"cxense.com")||d(h,"openxenterprise.com")||d(h,"uauniverse.com"))return BLACK;}else if(z=="v"){if(d(h,"redirectnative.com")||d(h,"pushnative.com")||d(h,"swrve.com")||d(h,"inner\u002Dactive.com")||d(h,"advertserve.com")||d(h,"adsnative.com"))return BLACK;}else if(d(h,"amobee.com")||d(h,"adblade.com")||d(h,"lockerdome.com")||d(h,"ad4game.com")||d(h,"vungle.com")||d(h,"admngronline.com")||d(h,"madsone.com")||d(h,"greystripe.com")||d(h,"omniture.com")||d(h,"awempire.com")||d(h,"pubdirecte.com"))return BLACK;}if(t=="d"){if(z=="a"){if(d(h,"opt.ximad.com")||d(h,"ximad.com")&&s(u,"*/ad3/*")||d(h,"dotandad.com")||d(h,"brucelead.com")||d(h,"bead\u002Dad.com")||d(h,"sbs\u002Dad.com")||d(h,"tapatalk.com")&&s(u,"*get_ad.php*"))return BLACK;}else if(z=="i"){if(s(u,"*watchcartoononline*")&&d(h,"algovid.com")||d(h,"innovid.com")||d(h,"mgid.com"))return BLACK;}else if(d(h,"adspeed.com")||d(h,"360yield.com")||d(h,"appflood.com")||d(h,"unityads.unity3d.com")||d(h,"untd.com"))return BLACK;}if(t=="g"){if(z=="n"){if(d(h,"bnserving.com")||d(h,"billytesting.com")||d(h,"integral\u002Dmarketing.com")||d(h,"advertising.com")||d(h,"flashtalking.com")||d(h,"cold\u002Dcold\u002Dfreezing.com"))return BLACK;}else if(d(h,"trafmag.com"))return BLACK;}if(t=="i"){if(z=="b"){if(d(h,"bebi.com")||d(h,"zumobi.com")||d(h,"inmobi.com"))return BLACK;}else if(d(h,"cdn.media.amp.avai.com")||d(h,"insightexpressai.com")||d(h,"upsight\u002Dapi.com")||d(h,"mobusi.com")||d(h,"dotomi.com"))return BLACK;}if(t=="h"){if(z=="s"){if(d(h,"airpush.com")||d(h,"adcash.com")||d(h,"europacash.com"))return BLACK;}else if(z=="c"){if(d(h,"clmbtech.com")||d(h,"aimatch.com")||d(h,"adnotch.com")||d(h,"adinch.com"))return BLACK;}else if(d(h,"sharethrough.com")||d(h,"adbooth.com"))return BLACK;}if(t=="k"){if(d(h,"ackak.com")||d(h,"iconpeak.com")||d(h,"exoclick.com")||d(h,"openclick.com")||d(h,"adapi.addealsnetwork.com")||d(h,"adzerk.com"))return BLACK;}if(t=="m"){if(z=="e"){if(d(h,"aax\u002Dus\u002Dpdx.amazon\u002Dadsystem.com")||d(h,"ir\u002Dna.amazon\u002Dadsystem.com")||d(h,"dra.amazon\u002Dadsystem.com")||d(h,"aax.amazon\u002Dadsystem.com")||d(h,"aax\u002Dus\u002Deast.amazon\u002Dadsystem.com")||d(h,"s.amazon\u002Dadsystem.com")||d(h,"api.unthem.com")||d(h,"aax\u002Deu.amazon\u002Dadsystem.com")||d(h,"c.amazon\u002Dadsystem.com"))return BLACK;}else if(d(h,"redtram.com")||d(h,"epom.com")||d(h,"ad131m.com")||d(h,"ad120m.com")||d(h,"ad132m.com")||d(h,"gumgum.com")||d(h,"adnium.com")||d(h,"mdotm.com")||d(h,"ad127m.com")||d(h,"adcel.vrvm.com")||d(h,"adform.com")||d(h,"castplatform.com"))return BLACK;}if(t=="l"){if(z=="a"){if(d(h,"ad.prismamediadigital.com")||d(h,"adversal.com")||d(h,"exponential.com")||d(h,"appodeal.com"))return BLACK;}else if(z=="l"){if(d(h,"adroll.com")||d(h,"misterbell.com")||d(h,"brightroll.com")||d(h,"btrll.com"))return BLACK;}else if(d(h,"padsdel.com")||d(h,"liverail.com")||d(h,"adwhirl.com")||d(h,"projectwonderful.com"))return BLACK;}if(t=="o"){if(z=="e"){if(d(h,"criteo.com")||d(h,"veeseo.com")||d(h,"wbdds.jeuxvideo.com"))return BLACK;}else if(z=="o"){if(d(h,"gemini.yahoo.com")||d(h,"beap\u002Dbc.yahoo.com")||d(h,"soundwave.mobile.yahoo.com")||d(h,"ads.yahoo.com")||d(h,"adserver.yahoo.com"))return BLACK;}else if(d(h,"globaltraffico.com")||d(h,"sekindo.com")||d(h,"zedo.com")||d(h,"chango.com")||d(h,"yieldmo.com")||d(h,"smaato.com"))return BLACK;}if(t=="n"){if(z=="d"){if(d(h,"c.jsrdn.com")||d(h,"eacdn.com")||d(h,"cb\u002Dcdn.com")||d(h,"akncdn.com")||d(h,"inmobicdn.com"))return BLACK;}else if(z=="o"){if(d(h,"tribalfusion.com")||d(h,"clkmon.com")||d(h,"nspmotion.com")||d(h,"adition.com")||d(h,"performancehorizon.com")||d(h,"adfalcon.com"))return BLACK;}else if(d(h,"applovin.com")||d(h,"mtburn.com")||d(h,"ziiporn.com")||d(h,"playhaven.com"))return BLACK;}if(t=="p"){if(z=="a"){if(d(h,"heyzap.com")||d(h,"a.jumptap.com")||d(h,"appserver\u002Dap.com"))return BLACK;}else if(d(h,"startapp.com")||d(h,"user\u002Dagent\u002Dtracker.herokuapp.com")||d(h,"rtbpop.com")||d(h,"adtop.com"))return BLACK;}if(t=="s"){if(z=="d"){if(d(h,"onclkds.com")||d(h,"juicyads.com")||d(h,"bcfads.com")||d(h,"mng\u002Dads.com")||d(h,"carbonads.com")||d(h,"marsads.com")||d(h,"tapjoyads.com")||d(h,"buysellads.com")||d(h,"moatads.com")||d(h,"hotwords.com")||d(h,"mellowads.com")||d(h,"1phads.com")||d(h,"mobile.aws.weather.com")&&s(u,"*/ads.json")||d(h,"ketads.com")||d(h,"openvideoads.com")||d(h,"pflexads.com")||d(h,"zestads.com")||d(h,"medyanetads.com")||d(h,"appads.com")||d(h,"mads.com")||d(h,"propellerads.com"))return BLACK;}else if(z=="k"){if(d(h,"mobytrks.com")||d(h,"terraclicks.com")||d(h,"hkg1.aastocks.com")||d(h,"ox\u002Dd.majorgeeks.com")||d(h,"yumenetworks.com")||d(h,"infolinks.com")||d(h,"keywordblocks.com")||d(h,"adtaxinetworks.com")||d(h,"ecpmrocks.com"))return BLACK;}else if(z=="t"){if(d(h,"medialets.com")||d(h,"adacts.com")||d(h,"bbelements.com"))return BLACK;}else if(d(h,"medialytics.com")||d(h,"admeasures.com")||d(h,"addthis.com")&&!d(h,"s7.addthis.com")||d(h,"clkdeals.com")||d(h,"otherlevels.com")||d(h,"propellerpops.com")||!s(u,"*.gif*")&&d(h,"mpnrs.com")||d(h,"traffpartners.com")||d(h,"ligatus.com")||d(h,"traffichaus.com")||d(h,"amazonaws.com")&&s(u,"*/adversion*")||d(h,"ad\u002Dsys.com")||d(h,"serving\u002Dsys.com")||d(h,"adnxs.com")||d(h,"drnxs.com"))return BLACK;}if(t=="r"){if(z=="e"){if(d(h,"kixer.com")||d(h,"yieldmanager.com")||d(h,"liveadexchanger.com")||d(h,"eyewonder.com")||d(h,"wwwpromoter.com")||d(h,"mob\u002Dserver.com")||d(h,"tradedoubler.com")&&!s(u,"*/click*")&&!s(u,"*itunesredir*")||d(h,"adkeeper.com")||d(h,"fyber.com")||d(h,"bidvertiser.com")||d(h,"applifier.com")||d(h,"smartadserver.com")||d(h,"ad\u002Dcenter.com"))return BLACK;}else if(d(h,"cpmstar.com")||d(h,"adgear.com")||d(h,"ad\u002Dstir.com")||d(h,"clickmngr.com")||d(h,"image.click.livedoor.com")||d(h,"adtailor.com"))return BLACK;}if(t=="t"){if(z=="f"){if(d(h,"cdn.applift.com")||d(h,"igpiphone.gameloft.com")||d(h,"201205igp.gameloft.com")||d(h,"igp06.gameloft.com")||d(h,"578756.gameloft.com")||d(h,"ingameads.gameloft.com"))return BLACK;}else if(z=="n"){if(d(h,"liveintent.com")||d(h,"revcontent.com")||d(h,"quantcount.com")||d(h,"adsinstant.com"))return BLACK;}else if(d(h,"rubiconproject.com")||d(h,"adsmarket.com")||d(h,"questionmarket.com")||d(h,"appsdt.com")||d(h,"lijit.com")||d(h,"mobiright.com")||d(h,"atdmt.com")||d(h,"adtilt.com")&&!s(u,"*configure*")||d(h,"leadbolt.com")||d(h,"avocarrot.com")||d(h,"apprupt.com")||d(h,"admost.com")||d(h,"chartboost.com")||d(h,"adexprt.com")||d(h,"reklamport.com")||d(h,"scanscout.com")||d(h,"intellitxt.com")||d(h,"appnext.com"))return BLACK;}if(t=="w"){if(d(h,"bannerflow.com")||d(h,"adnow.com"))return BLACK;}if(t=="v"){if(d(h,"onclasrv.com")||d(h,"n208adserv.com")||d(h,"directrev.com")||d(h,"clkrev.com")||d(h,"tom.itv.com"))return BLACK;}if(t=="y"){if(z=="l"){if(d(h,"adsupply.com")||d(h,"adtaily.com")||d(h,"4dsply.com"))return BLACK;}else if(d(h,"sponsorpay.com")||d(h,"doubleverify.com")||d(h,"trafficjunky.com")||d(h,"tapjoy.com")||d(h,"adcolony.com")||d(h,"ads.flurry.com")||d(h,"mobiletheory.com"))return BLACK;}if(t=="x"){if(d(h,"atlassbx.com")||d(h,"mediaplex.com")||d(h,"adpdx.com")||d(h,"mobclix.com")||d(h,"mobfox.com")||d(h,"openx.com")||d(h,"servedbyopenx.com")||d(h,"adk2x.com"))return BLACK;}if(t=="z"){if(d(h,"altrooz.com")||d(h,"adbuddiz.com")||d(h,"zestadz.com"))return BLACK;}if(d(h,"movi11.com")||d(h,"wafmedia5.com")||d(h,"admtpmp127.com")||d(h,"leadzu.com"))return BLACK;}else if(b=="net"){if(t=="a"){if(d(h,"adorika.net")||d(h,"chitika.net")||d(h,"clickterra.net"))return BLACK;}if(t=="e"){if(d(h,"redintelligence.net")||d(h,"accesstrade.net")||d(h,"mobilefuse.net")||d(h,"yen.appsfire.net")||d(h,"trafficgate.net")||d(h,"adverserve.net")||d(h,"api.pubnative.net"))return BLACK;}if(t=="d"){if(!d(h,"heise.nuggad.net")&&d(h,"nuggad.net")||d(h,"rnmd.net"))return BLACK;}if(t=="k"){if(d(h,"fastclick.net")||d(h,"connect.decknetwork.net")||d(h,"adzerk.net"))return BLACK;}if(t=="m"){if(d(h,"alea.adam.daum.net")||d(h,"adform.net")||d(h,"adverticum.net"))return BLACK;}if(t=="o"){if(d(h,"criteo.net")||d(h,"adsmogo.net")||d(h,"reporo.net")||d(h,"smaato.net"))return BLACK;}if(t=="n"){if(d(h,"inmobicdn.net")||d(h,"s1.2mdn.net")||d(h,"popadscdn.net")||d(h,"cubecdn.net")&&s(u,"*/js/loader_*"))return BLACK;}if(t=="p"){if(d(h,"adformdsp.net")||d(h,"lduhtrp.net")||d(h,"smartclip.net"))return BLACK;}if(t=="s"){if(z=="d"){if(d(h,"popads.net")||d(h,"everestads.net")||d(h,"onclickads.net")||d(h,"carbonads.net")||d(h,"msads.net"))return BLACK;}else if(d(h,"playnomics.net")||d(h,"vaxadserver.azurewebsites.net")||d(h,"zucks.net")||d(h,"leadboltapps.net")||d(h,"intermarkets.net"))return BLACK;}if(t=="r"){if(z=="e"){if(d(h,"admixer.net")||d(h,"admaster.net")||d(h,"adjuggler.net")||d(h,"readserver.net"))return BLACK;}else if(d(h,"adadvisor.net")||d(h,"adsfactor.net"))return BLACK;}if(t=="t"){if(d(h,"adsrocket.net")||d(h,"leadbolt.net"))return BLACK;}if(t=="y"){if(d(h,"buzzcity.net")||d(h,"trafficjunky.net"))return BLACK;}if(d(h,"adfonic.net")||d(h,"revsci.net")||d(h,"adbooth.net")||d(h,"crwdcntrl.net")||d(h,"2o7.net")||d(h,"uimserv.net")||d(h,"openx.net"))return BLACK;}else if(b=="org"){if(t=="s"){if(d(h,"4chan\u002Dads.org")||d(h,"openvideoads.org"))return BLACK;}if(d(h,"adtrace.org")||d(h,"ketchapp.org")||d(h,"zwaar.org")||d(h,"info.a7.org")||d(h,"openx.org"))return BLACK;}else if(b=="mobi"){if(d(h,"yoc.mobi")||d(h,"inner\u002Dactive.mobi")||d(h,"adsmogo.mobi")||d(h,"mocean.mobi")||d(h,"mydas.mobi")||d(h,"adver.mobi")||d(h,"vserv.mobi"))return BLACK;}else if(b=="de"){if(t=="l"){if(d(h,"damoh.spiegel.de")||d(h,"brightroll.de"))return BLACK;}if(d(h,"madvertise.de")||d(h,"movad.de")||d(h,"adtech.de")||d(h,"advolution.de")||d(h,"adspirit.de"))return BLACK;}else if(b=="jp"){if(d(h,"openx.jp")||d(h,"openxmarket.jp")||d(h,"advg.jp")||d(h,"zucks.co.jp"))return BLACK;}else if(b=="vn"){if(d(h,"ad360.vn")||d(h,"eclick.vn")||d(h,"adtimaserver.vn")||d(h,"admicro.vn"))return BLACK;}else if(b=="se"){if(d(h,"adrotator.se")||d(h,"emediate.se")||d(h,"fusion.dn.se"))return BLACK;}else if(b=="info"){if(t=="k"){if(d(h,"appshelf.ttpsdk.info")||d(h,"houseads.ttpsdk.info"))return BLACK;}if(d(h,"print.theyeshivaworld.info"))return BLACK;}else if(b=="tv"){if(d(h,"videoplaza.tv")||d(h,"adap.tv")||d(h,"teads.tv"))return BLACK;}else if(b=="pl"){if(d(h,"adtaily.pl")||d(h,"i\u002Dstream.pl")||d(h,"adocean.pl"))return BLACK;}else if(b=="biz"){if(d(h,"trafficfactory.biz")||d(h,"rarenok.biz"))return BLACK;}else if(b=="asia"){if(d(h,"pixels.asia")||d(h,"snapmobile.asia"))return BLACK;}else if(b=="io"){if(d(h,"liftoff.io")||d(h,"firstimpression.io"))return BLACK;}else if(b=="es"){if(d(h,"kimia.es"))return BLACK;}else if(b=="eu"){if(d(h,"emediate.eu"))return BLACK;}else if(b=="space"){if(d(h,"dlski.space"))return BLACK;}else if(b=="gr"){if(d(h,"adman.gr"))return BLACK;}else if(b=="ad"){if(d(h,"content.ad"))return BLACK;}else if(b=="ua"){if(d(h,"holder.com.ua"))return BLACK;}else if(b=="li"){if(d(h,"kau.li"))return BLACK;}else if(b=="at"){if(d(h,"ad.adworx.at"))return BLACK;}else if(b=="si"){if(d(h,"interseek.si"))return BLACK;}else if(b=="fr"){if(d(h,"ad2play.ftv\u002Dpublicite.fr"))return BLACK;}else if(b=="dk"){if(d(h,"emediate.dk"))return BLACK;}else if(b=="ru"){if(d(h,"admobi.ru"))return BLACK;}else if(b=="cn"){if(d(h,"admaster.com.cn"))return BLACK;}else if(b=="me"){if(d(h,"kiip.me"))return BLACK;}else if(b=="tw"){if(d(h,"adspending01.bwnet.com.tw"))return BLACK;}else if(b=="co"){if(d(h,"adk2.co"))return BLACK;}else if(b=="il"){if(d(h,"fus.yad2.co.il"))return BLACK;}else if(b=="cz"){if(d(h,"imedia.cz"))return BLACK;}if(s(h,"media.net")||s(u,"*/interstitiel/interstitiel.xml*")||((d(h,"amazonaws.com")&&s(u,"*admarvel*"))||d(h,"admarvel.com"))||(s(u,"*speednetwor*.com/*xbanner.*")||s(u,"*speednetwor*.com/*xpopup.*")||s(u,"*speednetwor*.com*adclickurl*")||s(u,"*speednetwor*.com*smart.js"))||(d(h,"flipboard.com")&&s(u,"*/adcreative/*"))||(d(h,"flipboard.com")&&s(u,"*/*adname*"))||(d(h,"flipboard.com")&&s(u,"*/flare/*")))||s(u,"*/openx/www/images/*")||((d(h,"googleadservices.com")&&!s(u,"*/aclk*")&&!s(u,"*/pagead/conversion.js"))||(d(h,"ade.googlesyndication.com")||(d(h,"pagead2.googlesyndication.com")||d(h,"pagead3.googlesyndication.com")||d(h,"adservice.google.com")||d(h,"pagead.googlesyndication.com")||d(h,"pagead1.googlesyndication.com"))||(d(h,"googletagservices.com")&&!s(u,"*/gpt.js")&&!s(u,"*/gpt_mobile.js")))||s(h,"inmobisdk*.akamaihd.net")||((d(h,"supersonicads.com")&&s(u,"*/delivery/*"))||(d(h,"ultraadserver.com")&&s(u,"*/api*")))||((d(h,"taboola.com")&&!s(u,"*goalmobileapp*"))||d(h,"taboolasyndication.com"))||((d(h,"msn.com")&&s(u,"*/adsadclient*"))||d(h,"h2.msn.com")||d(h,"rad.msn.com")||d(h,"stjjp.msn.com")||d(h,"udc.msn.com"))||(s(h,"*.manage.com")||s(h,"manage.com"))||s(u,"*/openx/www/delivery/*.php*")||s(h,"*.cj.com")||((d(h,"pub.sapo.pt")&&s(u,"*mobile.php*"))||(d(h,"pub.sapo.pt")&&s(u,"*vast.php*")))||s(u,"*/openx/www/api/v*/*.php*")||((d(h,"facebook.com")&&s(u,"*/plugins/ad.*"))||(d(h,"connect.facebook.net")&&s(u,"*/sdk/xfbml.ad.*")))||((d(h,"graph.facebook.com")&&s(u,"*/network_ads*"))||(d(h,"graph.facebook.com")&&s(u,"*advertise*"))||(d(h,"graph.facebook.com")&&s(u,"*/network_ads")))||(n(h,"89.207.18.1","255.255.255.0"))||s(h,"cj.com")||((!d(h,"static.doubleclick.net")&&!s(u,"*ythome*")&&!d(h,"stats.g.doubleclick.net")&&d(h,"doubleclick.net"))||d(h,"doubleciick.net")||d(h,"doubleclick.net")||d(h,"pubads.g.doubleclick.net")||d(h,"googleads.g.doubleclick.net"))||s(h,"m*.2mdn.net")||s(h,"*.media.net"))return BLACK;if(d(h,"adtechus.com"))return"PROXY 216.58.209.78:80";if(d(h,"fwmrm.net"))return"PROXY 216.58.209.78:80";return PROXY_DIRECT;}
