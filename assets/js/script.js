/**
 * @copyright	Copyright © 2018 - All rights reserved Crock.ltd
 * @license		GNU General Public License v2.0
 * @generator	http://xdsoft/joomla-module-generator/
 * July 2019 crock@vodafone.de
 */

jQuery(document).ready(function($){
	
var preceding = (sef==1)? '/':'';
var ImageSizeLimit = 1048576; // 1Mb
	$('.blog_ed_layer_author_title').html('Новый блог');
//-------------------- some css -------------------
var container = document.querySelector(selector);
	var container_css = window.getComputedStyle(container); 
	var container_width = parseInt(String(container_css.getPropertyValue('width')), 10) +30 +'px';
	var container_padding = container_css.getPropertyValue('padding');
	var container_margin = container_css.getPropertyValue('margin');
	var container_border = container_css.getPropertyValue('border');//('borderBlockEndWidth');
					
	$('.blog_ed_layer').css({width:container_width,padding:container_padding,margin:container_margin,border:container_border}); 
var mobi = 768;
var wid =  $(window).innerWidth(); 
var hig =  $(window).innerHeight();
var landscape = (wid - hig > 0) ? true : false; 
var cr_width = $('#cr').width();
var prld = $('#blg_preloader').width();
var imerror = $('#blg_image_error').width();
$('#blg_preloader').css('left',(wid-prld)/2);
$('#blg_image_error').css('left', (wid-imerror)/2)
if(wid < mobi){
	$('.blog_ed_layer').css({width:'100%',padding:'0',margin:'0',border:'none'}); 
	
} else {
	$('.mobile_controll').each(function(i,e){
		$(e).hide();
	});
}
var lcr = ($('.blog_ed_layer').width()-cr_width)/2;
$('#cr').css('left',lcr);

$('.ql-tooltip').draggable({ disabled: true });
//--------------------- resize ------------------------------------------
	$(window).resize(function(){
		wid =  $(window).innerWidth(); 
		hig =  $(window).innerHeight();
		landscape = (wid - hig > 0) ? true : false; 
		cr_width = $('#cr').width();
		prld = $('#blg_preloader').width(); 	
		imerror = $('#blg_image_error').width();	
		$('#blg_preloader').css('left',(wid-prld)/2);
		$('#blg_image_error').css('left', (wid-imerror)/2)
		$('#publish, #list').css('max-height', 'none');
		if($('.mobile_controll').css('display') !=='block'){$('.mobile_controll_open').show();}
		container_css = window.getComputedStyle(container); 
		container_width = parseInt(String(container_css.getPropertyValue('width')), 10) +30 +'px';
		container_padding = container_css.getPropertyValue('padding');
		container_margin = container_css.getPropertyValue('margin');
		container_border = container_css.getPropertyValue('border');
		$('.blog_ed_layer').css({width:container_width,padding:container_padding,margin:container_margin,border:container_border}); 
		
		if(wid < mobi){
			$('.blog_ed_layer').css({width:'100%',padding:'0',margin:'0',border:'none'}); 
			//$('#publish, #list').css('max-height', (landscape)?'150px':'300px');
		
			//var ql_width = $('.ql-toolbar').width(); console.log('toolwidth',$('.ql-toolbar').width());
			//var l = ($('.blog_ed_layer').width() - ql_width)/2;
			//$('.ql-tooltip').css('left',l);
			if($('.blog_ed_layer_top_labels').find('.vis').length !== 0){$('.vis').css({'left': $(window).width()/2 - $('.vis').width()/2 - $('.vis').parent().position().left});}
		} else {
			$('.mobile_controll').each(function(i,e){
					$('.standalone-container').removeAttr('style');
				  	$('#quill-container').removeClass('mobile_editor').removeAttr('style');
					$('.blog_ed_layer_header').show();
					$('.blog_editor').css('top', 200);
					//$('.ql-tooltip').css('top',120);
				$(e).hide();
			});
		}
		lcr = ($('.blog_ed_layer').width()-cr_width)/2;
		$('#cr').css('left',lcr);
		
		var ql_width = $('.ql-toolbar').width(); 										console.log('toolwidth',$('.ql-toolbar').width());
			var l = ($('.blog_ed_layer').width() - ql_width)/2;
			$('.ql-tooltip').css('left',l);
	});
//---------------- manage tips -------------------
$(document).on( "tooltipopen", '.blog_ed_layer, .blog_ed_layer_myImage', function( event, ui ) {
											
	setTimeout(function(){
		if($(event.target).data('ui-tooltip'))
		$(event.target).tooltip('close'); 	
	}, 2000);
});

//---------------- editor action for mobile --------------	
	$(document).on('click','.mobile_controll',  function(){
		var action = $(this).data('action');
		if (wid < mobi) {
			var action_height = $('.blog_ed_layer_header').height()+20;	
			if(action == 'close') {
		  $('.standalone-container').removeAttr('style');
		  $('#quill-container').removeClass('mobile_editor').removeAttr('style');
			$('.blog_ed_layer_header').show();
			$('.blog_editor').css('top', 200);
			$('.ql-tooltip').css('top',120);
		  $(this).hide();
			$('.mobile_controll_open').show();
			} else if(action == 'open') {
				$('.standalone-container').css('top', '155px'); //240
		  		$('#quill-container').addClass('mobile_editor').css('height', '100%');
				$('.blog_ed_layer_header').hide();
				$('.blog_editor').css('top', 200 - action_height);
				$(this).hide();
				$('.mobile_controll_close').show();
				$('.ql-tooltip').css('top',120 - action_height);
			}
	  		}
});
//----------- close controll windows with click outside them------------
$(document).on('click touchstart','.blog_ed_layer', function(event){
	 if ($(event.target).closest('.blog_ed_layer_top_labels').length == 0) {
    		$('.vis').each(function(i,e){
			$(e).removeClass('vis');
			$(e).hide();
			});
		 $('.blog_ed_layer_save').hide();
		}
});
	
//---------- controll ql-tooltip for link & video ---------------------
	$(document).on('propertychange input', '#blg_link_input', function(e){
	
		if($(this).val().length > 0){
			$('.ql-tooltip .ql-close').hide();
			$('.blg_bubble.ql-action').show();
		}else {
			$('.ql-tooltip .ql-close').show();
			$('.blg_bubble.ql-action').hide();
		}
	});
	$(document).on('click','.blg_bubble.ql-action', function(){	console.log('link click');
		$(this).hide();
		$('.ql-tooltip .ql-close').show();
	});

	
//--------------- my photos --------------------------
	$('.fancy-content_myphotos').on('click', function(){
		var folder = 'root'	;
		
		Myimages(folder);
		$( "#my_Images" ).addClass('hasbeen').dialog({
			classes: {
    		"ui-dialog": "blog_ed_layer_myImage"
  },
			open: function(event, ui){
				if($('.myimage_action').length == 0) {
				$(this).parent().find('.ui-dialog-titlebar').append('<div data-action="cover" title="Выбрать для обложки" class="dialog_cover_image myimage_action"></div><div data-action="editor" title="Вставить в редактор" class="dialog_body_image myimage_action"></div>');
				}
			}
		});
	});
	
// --------- Select an image from My Image folders------------------
		$(document).on('click ', '.item_image', function(){
			var attr = $(this).find('img').data('folder');
			if(attr ==='image') {
				$('.item_image').each(function(k,e){
					$(e).removeClass('item_selected');
				});
				$(this).addClass('item_selected');
			} 
		});
//----------------- actions for the selected image -----------------		
	$(document).on('click', '.myimage_action', function(){
		var action = $(this).data('action');
		var node = $('.item_image.item_selected').find('img');
		if(node.data('folder') !== null && node.data('folder') !== 'image') {
			return false;
		}
		var src = node.attr('src');
		switch(action) {
				//-- insert into editor--
				case 'editor' : 	
		var index = (quill.getSelection() || {}).index || quill.getLength();
		quill.insertEmbed(index, 'image', src);
				break;
				//-- insert into cover--
				case 'cover' :
				var exist_image_path = src;
				var data = {
						path: exist_image_path,
						format: 'json',
						option: 'com_ajax',
						module: 'blogcreatorcontent',
						method: 'insertexistimagesession'
					};
					jQuery.ajax({
		type: 'POST',
		url: url,
		data: data,
		success: function(res){
			if(res.data == true){
									//console.log('session tempImgPathArray is created');
				$('#blog_image').empty();
				$('.blog_ed_layer_image_wrap').show();
				$('#dropzone-element').hide();
				$('#blog_image').html('<img src="'+preceding+exist_image_path+'">');
				$('.fancy-footer .btn').removeAttr('disabled');
			}
		}
					});
				break;
		}
	});
	
//------------- my images folders navigation -------------------
	$(document).on('click ', '.item_image', function(){
			var attr = $(this).find('img').data('folder');
			if(attr ==='body' || attr ==='root') {
				Myimages(attr);
			} else {return false;}
		}); 
//-------------- initialize editor------------------- 	
				/*const Block = Quill.import('blots/block'); // can change wrap tag instead 'P'tag
				Block.tagName = 'div';
				Quill.register(Block, true); */
	
	//--- wrap ifarme by tag  with class .blg_video--
	
	const BlockEmbed = Quill.import('blots/block/embed');
	const Link = Quill.import("formats/link");
	class VideoBlot extends BlockEmbed {

		static create(url){
			const node = super.create(url);
			const iframe = document.createElement('iframe');
			iframe.setAttribute('frameborder', '0');
			iframe.setAttribute('allowfullscreen', true);
			iframe.classList.add('ql-video', 'ql-align-center');
			iframe.setAttribute('src', this.sanitize(url));
			node.appendChild(iframe);
			node.classList.add('blg_video');
			return node;
		}
		static sanitize(url) {
			return Link.sanitize(url);
		}
		static value(domNode){
			if(domNode.classList.contains('blg_video')){
			const iframe = domNode.querySelector('iframe');
			return iframe.getAttribute('src');
			}
		}
	}
	VideoBlot.blotName = 'video';
	VideoBlot.tagName = 'DIV';	//wrap div will be removed during save's process in helper.php---
	Quill.register(VideoBlot, true);
	
	//-- add attributes width and style into img tag , idea of Kexian Zhong (Lingceng)--
	
const __Image = Quill.import('formats/image');

class ImageFormat extends __Image {
	static get ATTRIBUTES() {
		return  ['width','style'];
	}
	//--rewrite formats and format of parent class
  static formats(domNode) {
    return this.ATTRIBUTES.reduce(function(formats, attribute) {
      if (domNode.hasAttribute(attribute)) {
        formats[attribute] = domNode.getAttribute(attribute);
      } else { 
		  //-> default attributes <-
		  domNode.setAttribute('width', '100');
		  domNode.setAttribute('style','margin:10px');
	  } 
      return formats;
    }, {});
  }
	format(name, value) {
    if (this.constructor.ATTRIBUTES.indexOf(name) > -1) {
      if (value) {
        this.domNode.setAttribute(name, value);
      } else {
        this.domNode.removeAttribute(name);
      }
    } else {
      super.format(name, value);
    }
  }
}
Quill.register(ImageFormat, true);
	
	//---- create quill------------	
var quill = new Quill('#quill-container', {
  modules: {
	imageResize: {
         // modules: [Resize]
        },
	imageDrop: true,
	imageResizeSlider:true,
    toolbar: [
     // [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline'],
      ['link'],['image', 'video']//, 
		//[{ 'font': [] }]
	]
	  
  },
 // scrollingContainer: '#scrolling-container', 
  placeholder: 'Начните писать здесь...',
  theme: 'bubble'
});

if(quill.hasFocus()) {
	//some doing........
}
//---------------- editor event: open additional tool && open mobile editor ---------
quill.on('selection-change', function(range, oldRange, source) {
  if (range) {
	 
	  if (wid < mobi) {
		  var action_height = $('.blog_ed_layer_header').height() +20;
		  $('.standalone-container').css('top', '155px'); // 240
		  		$('#quill-container').addClass('mobile_editor').css('height', '100%');//(landscape)?"45%":"60%");
				$('.blog_ed_layer_header').hide();
				$('.blog_editor').css('top', 200 - action_height);	  		
				$('.mobile_controll_open').hide();
				$('.mobile_controll_close').show();
	  } 
  } else {
   // console.log('Cursor not in the editor');
	/*  if (wid < mobi) {
		  $('.standalone-container').removeAttr('style');
		  $('#quill-container').removeClass('mobile_editor');
		  $('.mobile_controll').hide();
	  } */
  }
});
// ------------ check uploading image size --------------------
	quill.on('text-change', function(delta, oldDelta, source) {
  if (source == 'user') {
    						console.log("A user action triggered this change.", delta);
	  
	  var insert = delta.ops.find(function(element){
		 return element.insert; 
	  });
	  var retain = delta.ops.find(function(element){
		 return element.retain; 
	  });

	  var siz;

	  //--------- check  image size --
	  if(typeof(insert) !== 'undefined' && insert.insert.image && insert.insert.image.length > 0) { 
		  var srC = insert.insert.image;
		  var base64Length = srC.length - (srC.indexOf(',') +1) ;
		  var pad = (srC.charAt(srC.length - 2) === '=') ? 2 : ((srC.charAt(srC.length - 1) === '=') ? 1 : 0);
		  siz = base64Length *0.75 - pad;			
		  								console.log('size', siz); 
	  }else {
		  siz=0;
	  }

	  if(siz > ImageSizeLimit) {
			var index = quill.getSelection().index; 
		  	quill.deleteText(index,1,'api');
		  	$('#blg_image_error').show();
		  	setTimeout(function(){
			   $('#blg_image_error').hide();
		  	}, 2000);
	  }  
  }		
});
	
//------------- open additional tool --------------
	$('#cr').on('click', function(){
		$('.blog_ed_layer_save').hide();
		$('.ql-tooltip').toggleClass('ql-show');
		$('#cr').toggleClass('rotate');
		//--- draggable toolbar-
	if($('#cr').hasClass('rotate')){	
		$('.ql-tooltip').draggable({disabled:false});
	} else {
		$('.ql-tooltip').draggable({disabled:true});
	}				
			var action_height = $('.blog_ed_layer_header').height() +20;
			if($('.mobile_controll_close').css('display') == 'block') {
				$('.ql-tooltip').css('top',120 - action_height);
			} else {
			//$('.ql-tooltip').css('top',120);
				$('.ql-tooltip').css('top',-50);
			}
			var ql_width = $('.ql-toolbar').width(); //console.log('toolwidth',$('.ql-toolbar').width());
			var l = ($('.blog_ed_layer').width() - ql_width)/2;
			$('.ql-tooltip').css('left',l);
	});
//------------default id value ---------------------	
id_blog = 'new';
//---------- open edit layer ---------------
	$('a[href="#editModal"]').on('click', function(){
		$('.blog_ed_layer').show();
		$('.blog_ed_layer_save').css({'visibility': 'hidden', 'opacity':'0'});
		//------ remove body scroll----
			$('body').css('overflow', 'hidden');
	});
//----------------- close edit layer-----------
	$('.blog_ed_layer_close').on('click', function(){
			$('.blog_ed_layer').hide();	
		$('.vis').each(function(i,e){
			$(e).removeClass('vis');
			$(e).hide();
		});
			if($('.ql-tooltip').hasClass('ql-show')) {
				$('.ql-tooltip').removeClass('ql-show');
				$('#cr').removeClass('rotate');		 
				  }
		if($('#my_Images').hasClass('hasbeen')){
		$('#my_Images').dialog('destroy');
				}
		//--- return overflow for body
			$('body').css('overflow', 'auto');
								 });
	
	//--------- top controlls-----------
	
$('.ed_layer_contr').on('click', function(){
	var window_width = $(window).width();
	var id_node= $(this).data('contr'); 
		if($(id_node).hasClass('vis')) {
			$(id_node).removeClass('vis');
			//$(id_node).hide();
			$('.fancy').each(function(i,el){
				$(el).hide();
			});
			return;
		} else {
			$(id_node).show();
		}
	$('.vis').each(function(i,e){
		$(e).removeClass('vis');
	});
		$(id_node).toggleClass('vis');
			var position = $(this).position();
			$(id_node).css({'left': position.left - $(id_node).width() + $(this).width(), 'top': position.top +30});
			$(id_node).find('.arrow').css({'margin-left': $(id_node).width() - 30});
		if(window_width < mobi ) {
			$(id_node).css({'left': window_width/2 - $(id_node).width()/2 - $(id_node).parent().position().left, 'top': position.top +30});
			$(id_node).find('.arrow').css({'display': 'none'});
		}
	});
	//------------ hover in blog's list----
	$('.fancy .item_blog').hover(function(){
		$(this).css('background-color', '#ebebeb');
		$(this).find('a[data-action=delete]').parent().show();
	}, function(){
		$(this).css('background-color', '#fff');
		$(this).find('a[data-action=delete]').parent().hide();
	});
		//-------- new blog == lunch styles-----------
	$('.fancy-title_add_draft').on('click', function(){
		var editor_length = quill.getLength();
		quill.deleteText(0,editor_length);
		$('.input_blog_title').val('');
	//	$('.selected_category').empty();
		$('#blog_image').empty();
		$('.blog_ed_layer_image_wrap').hide();
		$('#dropzone-element').show();
		$('.vis').each(function(i,e){
			$(e).removeClass('vis');
			$(e).hide();
		});
		
	//------------- restore placeholder-------------------
		$('.input_blog_title').attr('placeholder','Придумайте название...');	
	
	//------------- able save button ---------------------	
		$('.fancy-footer .btn').removeAttr('disabled');
	//---------- clear image session ----------------------
			var data = {
						sessionName: 'tempImgPathArray',
						format: 'json',
						option: 'com_ajax',
						module: 'blogcreatorcontent',
						method: 'deletesessions'
					};
					jQuery.ajax({
		type: 'POST',
		url: url,
		data: data,
		success: function(res){
			$('.blog_ed_layer_author_title').html('Новый блог');
		}
					});
		id_blog = 'new';
	});
	
		//------------ save  blog---------
	$('.fancy-footer .btn').on('click', function(){
			
		var new_blog_title = $('.input_blog_title').val();
		var publ = $('.switch input:checked').val();
			if ($('.switch input:checked').length === 0){
				 publ = 0;
			}
			if(new_blog_title.length === 0) {
				$('.input_blog_title').addClass('blog_error');
				return;
			} else {
				$('.input_blog_title').removeClass('blog_error');
			}
		var editor_length = parseInt (quill.getLength());
			if(editor_length <=1 ) {
				$('.ql-editor').addClass('blog_error');
				return;
			}
															
		var blog_content  = quill.root.innerHTML;															
			SaveItem(blog_content, new_blog_title, publ);
	});
//-------------- remove error classes ------------------------
		//** remove title error shadow **
	$('.input_blog_title').on('keydown', function(){
		$('.input_blog_title').removeClass('blog_error');
		$('.fancy-footer .btn').removeAttr('disabled');
	});
		//** remove editor class error shadow 
	quill.on('text-change', function(delta, oldDelta, source){
		if(source === 'user'){
			$('.ql-editor').removeClass('blog_error');
			$('.fancy-footer .btn').removeAttr('disabled');
		}
	});
	
	//----------delete recent image in blog----------
	$('.blog_image_delete').on('click', function(){
		if(recentImg) {
			deleteRecentImage();
		}else {
				$('#blog_image').empty();
				$('.blog_ed_layer_image_wrap').hide();
				$('#dropzone-element').show();
				$('.fancy-footer .btn').removeAttr('disabled'); //??????
		}
	});
	

	
// *** 	Posts list actions ***

	jQuery('.aj').on('click', function(elem){
		jQuery('#item_footer .footer_message').empty();
		
	//***** post id for actions
		id_blog = jQuery(this).data('id'); 
	//*****
		var action = jQuery(this).data('action'); 
														// edit
		if (action == 'edit') {
		catid = jQuery(this).data('catid');	
			EditItem()	;
		}												//delete
		if (action == 'delete') {
			 elem.preventDefault();
		var Warning = 'Are you sure?';
        if (window.confirm(Warning)) {
            location.href = this.href;
			DeleteItem();
        }

		}
		
	});
	
// ---------- function Delete blog -------------
function DeleteItem(){
		var data = {
		userId: userId,
		id: id_blog,
		format: 'json',
		option: 'com_ajax',
		module: 'blogcreatorcontent',
		method: 'deleteitem'
	}
	jQuery.ajax({
		type: 'POST',
		data: data,
		url: url,
		beforeSend: function(){
			//some doing ...
		},
		success: function(result){
			//some doing....
			if(result.data == true) {
				$('.blog_ed_layer_save').text('Блог удален');
				$('.blog_ed_layer_save').css({'opacity': '1', 'color': 'green', 'visibility':'visible'});
				$('.aj[data-id='+id_blog+']').parent().parent().parent().remove();
				$('.vis').each(function(i,e){
					$(e).removeClass('vis');
				});
				// rote to new blog state
				$('.fancy-title_add_draft').click();
			}
		}
			});
}	
// *** END ***
//--------------------- delete recent image ---------------------	
function deleteRecentImage(){
	var data= {
		format: 'json',
		option: 'com_ajax',
		module: 'blogcreatorcontent',
		recent_img_path : recentImg,
		method: 'deleterecentimage'
	};
	jQuery.ajax({
		type: 'POST',
		url: url,
		data: data,
		success: function(res){ 
			if(res.data === true){
				$('#blog_image').empty();
				$('.blog_ed_layer_image_wrap').hide();
				$('#dropzone-element').show();
				$('.fancy-footer .btn').removeAttr('disabled'); //??????
			}
		}
	});
	
}
//----------------- able save button ------------------	
$('.fancy-content .switch input').on('change', function(){
	$('.fancy-footer .btn').removeAttr('disabled');
});

	
// *** DropZone params for uploading cover image	***

	Dropzone.options.dropzoneElement = {
		maxFilesize: 2, //Mb
		maxFiles: 1,
		acceptedFiles: 'image/*',
		dictDefaultMessage:'Клик или перетащите картинку',
		init: function(){
		//	dropzoneElement = this;
				this.options.addRemoveLinks = true;
				this.options.dictRemoveFile = "Удалить";
			
				this.on("addedfile", function (file) {
						jQuery('#img_footer .footer_message').empty();
					filename = file;
				  				});
				this.on("removedfile", function (file) {
		
      				});
				this.on("maxfilesexceeded", function (file) {
				this.removeFile(file);
					});
			var _this = this;
				this.on('removedfile', function(){
					_this.options.dictDefaultMessage ='Клик или перетащите картинку';
					var data = {
						sessionName: 'tempImgPathArray',
						format: 'json',
						option: 'com_ajax',
						module: 'blogcreatorcontent',
						method: 'deletesessions'
					};
					jQuery.ajax({
		type: 'POST',
		url: url,
		data: data,
		success: function(res){
			// and may be to do something ....
		}
					});
				});
			}
				
	};
// *** END ***

// -------------- function edit existing blog ----------------
function EditItem()	{
		var data = {
		id: id_blog,
		catid: catid,
		format: 'json',
		option: 'com_ajax',
		module: 'blogcreatorcontent',
		method: 'getitem'
	}
	$.ajax({
		type: 'POST',
		url: url,
		data: data,
		beforeSend: function(){
		$('#blg_preloader, #blg_preloader_bkg').show();	
		},
		success: function(res){
			
			$('#blg_preloader, #blg_preloader_bkg').hide();
			var blog_title = res.data[0].title;
			var cat_title =	res.data[0].cat;
			var state = res.data[0].state; 											
			if(state == '0') $('.switch input').removeAttr('checked');
			if(state == '1') $('.switch input').attr('checked', true);
			var images = JSON.parse(res.data[0].images); 

			var str = res.data[0].fulltext;
			$('.input_blog_title').val(blog_title);
			$('.input_blog_title').attr('placeholder','');
			quill.clipboard.dangerouslyPasteHTML(str);
			
			$('#dropzone-element').hide();
			$('.blog_ed_layer_image_wrap').show();
			var _img = new Image();
			
			_img.onload = function() {
			$('#blog_image').html('<img src="'+preceding+images.image_intro+'">');
				
			} ;
			_img.onerror = function() {
				$('#blog_image').html('<img src="'+preceding + 'modules/mod_blogcreatorcontent/assets/css/images/placeholder.png">');
				
			};
			_img.src = preceding + images.image_intro;
			$('.selected_category').html(cat_title);
			recentImg = images.image_intro;
			// 23-07-2019
			$('.blog_ed_layer_author_title').html('Редактирование');
		}
	});

}
	

// ---------- save blog function ----------
function SaveItem(new_text, new_title, publ)	{
			var	data ={
				publ: publ,
				title: new_title,
				catid: selected_catId,
				id: id_blog,
				new_text: new_text,
				format: 'json',
				option: 'com_ajax',
				module: 'blogcreatorcontent',
				method: 'saveitem'
			};
			
		jQuery.ajax({
		type: 'POST',
		data: data,
		url: url,
		beforeSend: function(){
		jQuery('#blg_preloader, #blg_preloader_bkg').show();	
		}, 
		success: function(e){
			jQuery('#blg_preloader, #blg_preloader_bkg').hide();
			if (e.data === true) {
				if(publ == 1) {
				$('.blog_ed_layer_save').show().text('Опубликовано');
				} else {
					$('.blog_ed_layer_save').show().text('Черновик сохранен');
				}
			
				$('.blog_ed_layer_save').css({'opacity': '1', 'color': 'green', 'visibility':'visible'});
				$('.vis').each(function(i,e){
					$(e).removeClass('vis');
					$(e).hide();
				});
				
			}else {
				// if not true something doing !!!!
				console.log(e.data);
				$('.blog_ed_layer_save').text('Ошибка!');
				$('.blog_ed_layer_save').css({'opacity': '1', 'color': 'red', 'visibility':'visible'});
				$('.vis').each(function(i,e){
					$(e).removeClass('vis');
					$(e).hide();
				});
			}
			
			if($('.ql-tooltip').hasClass('ql-show')) {
					$('.ql-tooltip').removeClass('ql-show');
					$('#cr').removeClass('rotate');		 
				  }
			
		}
				
			});
}
	
//----------- Function MyImages -------------------------
function Myimages(folder) {
	var data ={
				
				folder: folder,
				format: 'json',
				option: 'com_ajax',
				module: 'blogcreatorcontent',
				method: 'myimages'
						}
			jQuery.ajax({
				type: 'POST',
				data: data,
				url: url,
				beforeSend: function(){
				// something doing .........................
					},
				success: function(e){
				var element;
				var folder_images;
				var goback;
					jQuery('#my_Images').empty();
					var search = JSON.parse(e.data);
					jQuery.each(search['items'], function(item){			
				var el = search['items'][item];
				
				goback = '<div class="item_image"><div class="item_thumbnail"><img data-folder="root" src="modules/mod_blogcreatorcontent/assets/css/images/go-back.png" width="30"></div><div class="item_name">BACK</div>';
					
				folder_images = '<div class="item_image"><div class="item_thumbnail"><img data-folder="body" data-path="'+el['path']+'" src="modules/mod_blogcreatorcontent/assets/css/images/folder.png" width="30"></div><div class="item_name">'+el['name'].slice(0,7)+'</div>';
					
				item = '<div class="item_image"><div class="item_thumbnail"><img data-folder="image" src="'+el['path']+'" width="50"></div><div class="item_name">'+el['name'].slice(0,7)+'</div><div class="item_size">'+Math.round(el['size']/1000)+' Kb.</div>'; 
									
					if (el['type'] == 'folder'){
						jQuery('#my_Images').prepend(folder_images);
						//console.log('folder');						
							 } else {
						jQuery('#my_Images').prepend(item);									  
									} 
				}); 
					if(search['name'] === 'body')	{jQuery('#my_Images').prepend(goback);}
					
					$('.blog_ed_layer_myImage div[title]').tooltip();
								}
				
							 });
}

//------------------------------ END --------------------------------------------------------	
});