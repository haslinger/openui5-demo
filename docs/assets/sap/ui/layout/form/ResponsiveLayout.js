/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2018 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','sap/ui/layout/ResponsiveFlowLayout','sap/ui/layout/ResponsiveFlowLayoutData','./Form','./FormContainer','./FormElement','./FormLayout','sap/ui/layout/library','sap/ui/core/Control','./ResponsiveLayoutRenderer'],function(q,R,a,F,b,c,d,l,C,e){"use strict";var f=d.extend("sap.ui.layout.form.ResponsiveLayout",{metadata:{library:"sap.ui.layout"}});var P=C.extend("sap.ui.layout.form.ResponsiveLayoutPanel",{metadata:{aggregations:{"content":{type:"sap.ui.layout.ResponsiveFlowLayout",multiple:false}},associations:{"container":{type:"sap.ui.layout.form.FormContainer",multiple:false},"layout":{type:"sap.ui.layout.form.ResponsiveLayout",multiple:false}}},getLayoutData:function(){var i=sap.ui.getCore().byId(this.getContainer());var L=sap.ui.getCore().byId(this.getLayout());var j;if(L&&i){j=L.getLayoutDataForElement(i,"sap.ui.layout.ResponsiveFlowLayoutData");}return j;},getCustomData:function(){var i=sap.ui.getCore().byId(this.getContainer());if(i){return i.getCustomData();}},refreshExpanded:function(){var i=sap.ui.getCore().byId(this.getContainer());if(i){if(i.getExpanded()){this.$().removeClass("sapUiRLContainerColl");}else{this.$().addClass("sapUiRLContainerColl");}}},renderer:function(i,j){var u=sap.ui.getCore().byId(j.getContainer());var L=sap.ui.getCore().byId(j.getLayout());var v=j.getContent();if(!u||!L){return;}var E=u.getExpandable();var T=u.getTooltip_AsString();var w=u.getToolbar();var x=u.getTitle();i.write("<div");i.writeControlData(j);i.addClass("sapUiRLContainer");if(E&&!u.getExpanded()){i.addClass("sapUiRLContainerColl");}if(w){i.addClass("sapUiFormContainerToolbar");}else if(x){i.addClass("sapUiFormContainerTitle");}if(T){i.writeAttributeEscaped('title',T);}i.writeClasses();L.getRenderer().writeAccessibilityStateContainer(i,u);i.write(">");L.getRenderer().renderHeader(i,w,x,u._oExpandButton,E,false,u.getId());if(v){i.write("<div");i.addClass("sapUiRLContainerCont");i.writeClasses();i.write(">");i.renderControl(v);i.write("</div>");}i.write("</div>");}});f.prototype.init=function(){this.mContainers={};this._defaultLayoutData=new a({margin:false});};f.prototype.exit=function(){for(var i in this.mContainers){r.call(this,i);}if(this._mainRFLayout){this._mainRFLayout.destroy();delete this._mainRFLayout;}this._defaultLayoutData.destroy();delete this._defaultLayoutData;};f.prototype.onBeforeRendering=function(E){var i=this.getParent();if(!i||!(i instanceof F)){return;}i._bNoInvalidate=true;_.call(this,i);t.call(this,i);i._bNoInvalidate=false;};f.prototype.toggleContainerExpanded=function(i){var j=i.getId();if(this.mContainers[j]&&this.mContainers[j][0]){var u=this.mContainers[j][0];u.refreshExpanded();}};f.prototype.onLayoutDataChange=function(E){var S=E.srcControl;var i;var j;var u;if(S instanceof b){if(this._mainRFLayout){this._mainRFLayout.onLayoutDataChange(E);}}else if(S instanceof c){j=S.getParent().getId();if(this.mContainers[j]&&this.mContainers[j][1]){this.mContainers[j][1].onLayoutDataChange(E);}}else{var v=S.getParent();if(v instanceof c){i=v.getParent();j=i.getId();u=v.getId();if(this.mContainers[j]&&this.mContainers[j][2]&&this.mContainers[j][2][u]){if(this.mContainers[j][2][u][1]){var w=v.getFields();o.call(this,this.mContainers[j][2][u][1],w);}this.mContainers[j][2][u][0].onLayoutDataChange(E);}}}};f.prototype.onsapup=function(E){this.onsapleft(E);};f.prototype.onsapdown=function(E){this.onsapright(E);};f.prototype.getContainerRenderedDomRef=function(i){if(this.getDomRef()){var j=i.getId();if(this.mContainers[j]){if(this.mContainers[j][0]){var u=this.mContainers[j][0];return u.getDomRef();}else if(this.mContainers[j][1]){var v=this.mContainers[j][1];return v.getDomRef();}}}return null;};f.prototype.getElementRenderedDomRef=function(E){if(this.getDomRef()){var i=E.getParent();var j=E.getId();var u=i.getId();if(this.mContainers[u]){if(this.mContainers[u][2]){var v=this.mContainers[u][2];if(v[j]){var w=v[j][0];return w.getDomRef();}}}}return null;};function _(j){var v=j.getVisibleFormContainers();var V=v.length;var u;var w;var x;var y;var i=0;for(i=0;i<V;i++){u=v[i];u._checkProperties();w=u.getId();x=undefined;y=undefined;if(this.mContainers[w]&&this.mContainers[w][1]){y=this.mContainers[w][1];}else{y=m.call(this,u,undefined);}var T=u.getTitle();var z=u.getToolbar();if(z||T||u.getExpandable()){if(this.mContainers[w]&&this.mContainers[w][0]){x=this.mContainers[w][0];}else{x=g.call(this,u,y);n(y,true);}y.removeStyleClass("sapUiRLContainer");}else{if(this.mContainers[w]&&this.mContainers[w][0]){h(this.mContainers[w][0]);n(y,false);}y.addStyleClass("sapUiRLContainer");}var A=k.call(this,u,y);this.mContainers[w]=[x,y,A];}var O=Object.keys(this.mContainers).length;if(V<O){for(w in this.mContainers){var B=false;for(i=0;i<V;i++){u=v[i];if(w==u.getId()){B=true;break;}}if(!B){r.call(this,w);}}}}function g(i,j){var u=i.getId();var v=new P(u+"--Panel",{container:i,layout:this,content:j});return v;}function h(i){i.setContent("");i.setLayout("");i.setContainer("");i.destroy();}function k(j,u){var v=j.getId();var E=j.getVisibleFormElements();var V=E.length;var w={};if(this.mContainers[v]&&this.mContainers[v][2]){w=this.mContainers[v][2];}var x;var y;var L=-1;var z;var A;var i=0;for(i=0;i<V;i++){z=E[i];A=z.getId();s.call(this,j,z,w,u,i);if(w[A]){x=w[A][0];L=u.indexOfContent(x);if(L!=V){u.removeContent(x);u.insertContent(x,V);L=V;}}else{x=m.call(this,j,z);x.addStyleClass("sapUiRLElement");if(z.getLabel()){x.addStyleClass("sapUiRLElementWithLabel");}w[A]=[x,undefined];L++;u.insertContent(x,L);}var B=z.getFields();if(z.getLabel()&&B.length>1){if(w[A][1]){y=w[A][1];}else{y=m.call(this,j,z,true);y.addStyleClass("sapUiRLElementFields");w[A][1]=y;}o.call(this,y,B);}else{if(w[A][1]){y=w[A][1];p(y);w[A][1]=undefined;}}}var O=Object.keys(w).length;if(V<O){for(A in w){var D=false;for(i=0;i<V;i++){z=E[i];if(A==z.getId()){D=true;break;}}if(!D){if(w[A][1]){y=w[A][1];p(y);}x=w[A][0];u.removeContent(x);p(x);delete w[A];}}}return w;}function m(i,E,j){var I;if(E&&!j){I=E.getId()+"--RFLayout";}else if(E&&j){I=E.getId()+"--content--RFLayout";}else if(i){I=i.getId()+"--RFLayout";}else{return false;}var u=new R(I);u.__myParentLayout=this;u.__myParentContainerId=i.getId();if(E){u.__myParentElementId=E.getId();if(!j){u.getContent=function(){var E=sap.ui.getCore().byId(this.__myParentElementId);if(E){var v=[];var L=E.getLabelControl();var w=E.getFields();if(!L||w.length<=1){v=w;if(L){v.unshift(L);}}else{var x=this.__myParentLayout;var y=this.__myParentContainerId;var z=E.getId();if(L){v.push(L);}if(x.mContainers[y]&&x.mContainers[y][2]&&x.mContainers[y][2][z]&&x.mContainers[y][2][z][1]){v.push(x.mContainers[y][2][z][1]);}}return v;}else{return false;}};u._addContentClass=function(v,w){if(w==0){var E=sap.ui.getCore().byId(this.__myParentElementId);if(E){var L=E.getLabelControl();if(v==L){return"sapUiFormElementLbl";}}}return null;};}else{u.getContent=function(){var E=sap.ui.getCore().byId(this.__myParentElementId);if(E){return E.getFields();}else{return false;}};}}else if(i){u._getAccessibleRole=function(){var i=sap.ui.getCore().byId(this.__myParentContainerId);var L=this.__myParentLayout;if(L._mainRFLayout&&!i.getToolbar()&&!i.getTitle()&&!i.getExpandable()&&i.getAriaLabelledBy().length>0){return"form";}};u.getAriaLabelledBy=function(){var i=sap.ui.getCore().byId(this.__myParentContainerId);if(i&&!i.getToolbar()&&!i.getTitle()&&!i.getExpandable()){return i.getAriaLabelledBy();}return[];};}if((E&&!j)||(!E&&!i.getToolbar()&&!i.getTitle()&&!i.getExpandable())){n(u,false);}else{u.setLayoutData(new a({margin:false}));}return u;}function n(i,O){if(O){if(i.__originalGetLayoutData){i.getLayoutData=i.__originalGetLayoutData;delete i.__originalGetLayoutData;}}else if(!i.__originalGetLayoutData){i.__originalGetLayoutData=i.getLayoutData;i.getLayoutData=function(){var L=this.__myParentLayout;var j=sap.ui.getCore().byId(this.__myParentContainerId);var E=sap.ui.getCore().byId(this.__myParentElementId);var u;if(E){u=L.getLayoutDataForElement(E,"sap.ui.layout.ResponsiveFlowLayoutData");}else if(j){u=L.getLayoutDataForElement(j,"sap.ui.layout.ResponsiveFlowLayoutData");}if(u){return u;}else if(E){return L._defaultLayoutData;}};}}function o(j,u){var L;var w=0;for(var i=0;i<u.length;i++){var v=u[i];L=this.getLayoutDataForElement(v,"sap.ui.layout.ResponsiveFlowLayoutData");if(L){w=w+L.getWeight();}else{w++;}}L=j.getLayoutData();if(L){L.setWeight(w);}else{j.setLayoutData(new a({weight:w}));}}function p(i){if(i.__myParentContainerId){i.__myParentContainerId=undefined;}if(i.__myParentElementId){i.__myParentElementId=undefined;}i.__myParentLayout=undefined;i.destroy();}function r(i){var j=this.mContainers[i];var u;var E=j[2];if(E){for(var v in E){if(E[v][1]){p(E[v][1]);}u=E[v][0];p(u);delete E[v];}}u=j[1];if(u){u.removeAllContent();p(u);}var w=j[0];if(w){h(w);}delete this.mContainers[i];}function s(i,E,j,u,I){var v=E.getId();var w=v+"--RFLayout";var x=sap.ui.getCore().byId(w);if(!j[v]&&x){var O=x.__myParentContainerId;j[v]=this.mContainers[O][2][v];u.insertContent(x,I);x.__myParentContainerId=i.getId();if(j[v][1]){j[v][1].__myParentContainerId=i.getId();}delete this.mContainers[O][2][v];}}function t(u){var v=u.getVisibleFormContainers();var w;var L=v.length;var x=0;var i=0;var j=0;if(L>1){if(!this._mainRFLayout){this._mainRFLayout=new R(u.getId()+"--RFLayout").setParent(this);}else{var y=this._mainRFLayout.getContent();x=y.length;var E=false;for(i=0;i<x;i++){var z=y[i];w=undefined;if(z.getContainer){w=sap.ui.getCore().byId(z.getContainer());}else{w=sap.ui.getCore().byId(z.__myParentContainerId);}if(w&&w.isVisible()){var V=v[j];if(w!=V){E=true;break;}var A=this.mContainers[w.getId()];if(A[0]&&A[0]!=z){E=true;break;}if(!A[0]&&A[1]&&A[1]!=z){E=true;break;}j++;}else{this._mainRFLayout.removeContent(z);}}if(E){this._mainRFLayout.removeAllContent();x=0;}}if(x<L){var S=0;if(x>0){S=x--;}for(i=S;i<L;i++){w=v[i];var B=w.getId();if(this.mContainers[B]){if(this.mContainers[B][0]){this._mainRFLayout.addContent(this.mContainers[B][0]);}else if(this.mContainers[B][1]){this._mainRFLayout.addContent(this.mContainers[B][1]);}}}}}}return f;});