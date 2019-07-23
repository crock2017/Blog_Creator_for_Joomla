<?php
/**
 * @copyright	Copyright © 2018 - All rights reserved Crock.ltd
 * @license		GNU General Public License v2.0
 * July 2019 crock@vodafone.de
 */
defined('_JEXEC') or die;
?>

<div class="blog_ed_layer">
	<div class="blog_ed_layer_wrap">
		<div class="blog_ed_layer_close"></div>
		<div class="blog_ed_layer_help"></div>
		<div class="blog_ed_layer_header">
			<div class="blog_ed_layer_header_inner">
				<a class="blog_ed_layer_author" href="javascript:void(0)">
					<div class="blog_ed_layer_author_img" style="background-image: url('<?=$path; ?>/modules/mod_blogcreatorcontent/assets/css/images/photo_50.png?ava=1')"></div>
				</a>
				<a class="blog_ed_layer_author_link"><?=$user->name;?></a>
				<div class="blog_ed_layer_author_title"></div>
				<div class="blog_ed_layer_top_labels">
					  <div class="blog_ed_layer_save" style="visibility: hidden; opacity: 0;"></div>
					  <div class="blog_ed_layer_list ed_layer_contr" data-contr = "#list">Мои статьи</div>
					  <div class="blog_ed_layer_publish ed_layer_contr" data-contr = "#publish">Публикация</div>
	<!-- PUBLISH ----------->	
					<div id="publish" style="display:none;" class="fancy opac" >
						<div class="arrow">
							<div class="arrow_top"></div>
						</div>
							  <h3 class="fancy-title">
								Подготовка к публикации
							  </h3>
							  <div class="fancy-content">
								<div class="fancy-content_subheader">Обложка</div>
								<div title="Мои фотографии" class="fancy-content_myphotos"></div>
								<div class="fancy-content_uploader">
									<form id="dropzone-element" class="dropzone dz-clickable" action="#">
									<input name="option" class="" style="" value="com_ajax"  type="hidden">
									<input name="module" class="" style="" value="blogcreatorcontent"  type="hidden">
									<input name="method" class="" style="" value="editimg"  type="hidden">
									<input name="format" class="" style="" value="json"  type="hidden">
									<input name="file" class="dz-hidden-input" style="visibility: hidden; position: absolute; top: 0px; left: 0px; height: 0px; width: 0px;" type="file">
									</form>
									<div class="blog_ed_layer_image_wrap" style="display:none;">
										<div id="blog_image"  class="blog_ed_layer_image"></div>
										<div class="blog_image_delete" style="background-image: url('modules/mod_blogcreatorcontent/assets/css/images/icons8-cancel-32.png');
		cursor: pointer;"></div>
								  </div>
								</div>
								  <span class="blog_label">Опубликовать </span>
								  <label class="switch">
										<input type="checkbox" value="1" checked>
										<span class="slider round"></span>
										</label>
								 
							  </div>
							  <div class="fancy-footer">
								<button class="btn btn-primary" disabled>Сохранить</button>
								<a style="display:none;" class="blog_ed_layer_delete">Удалить</a>
							  </div>
					</div>
	<!------ LIST items--------------------------------->
	<?php
	$index_publeshed = 0;
	$publeshed = '<div class ="item_list">';
		if ($list) {
	//		foreach($categories as $category){
		//$publeshed .= '<div class="item_category">'.$category->name.' :</div>';
		foreach($list as $item){ 
			if($item->state == 1) {
		//if ($category->id == $item->categoryId){
		$publeshed .= '<div class="item_blog"><div class="item_title"><span><a title="Редактировать" href="javascript:void(0)" class=" aj" data-action="edit" data-catid="'.$item->catid.'" data-id="'.$item->id.'" >'.$item->title.'</a></span><span style="float:right; display: none;"><a title="Удалить" href="javascript:void(0)" data-action="delete" data-id="'.$item->id.'" class="aj">x</a></span></div><div class="item_info"><span>Категория: <span>'.$cats->title.'</span><span> ,'.date_format(date_create($item->created), "d/m/y").'</span></span></div></div>'; 
			$index_publeshed = 1;
//	}
			}
	}
//}
}
	$publeshed .='</div>';
	if($index_publeshed == 0)	{
	$draft = '<div style="color:red; text-align: center;" class="item_blog">У вас нет записей.</div>';
}
					
	$index_draft = 0;
		$draft = '<div class ="item_list">';
		if ($list) {		
	//		foreach($categories as $category){
		foreach($list as $item){ 
			if($item->state == 0 ) {
		//if ($category->id == $item->categoryId  ){
		$draft .= '<div class="item_blog"><div class="item_title"><span><a title="Редактировать" href="javascript:void(0)" class=" aj" data-action="edit" data-catid="'.$item->catid.'" data-id="'.$item->id.'" >'.$item->title.'</a></span><span style="float:right; display: none;"><a title="Удалить" href="javascript:void(0)" data-action="delete" data-id="'.$item->id.'" class="aj">x</a></span></div><div class="item_info"><span>Категория: <span>'.$cats->title.'</span><span> ,'.date_format(date_create($item->created), "d/m/y").'</span></span></div></div>'; 
			$index_draft = 1;
	} 
			}
	//}
			
//}
			
} 
	$draft .='</div>';
					
if($index_draft == 0)	{
	$draft = '<div style="color:red; text-align: center;" class="item_blog">У вас нет записей.</div>';
}				
	?>				
	<!------ LIST container--------------------------------->			
						<div id="list" style="display:none;" class="fancy opac" style="">
						<div class="arrow">
							<div class="arrow_top"></div>
						</div>
							<div class="fancy-title">Создать черновик
								<div data-toggle="tooltip" data-placement="top" title="Новый черновик" class="fancy-title_add_draft"></div>
							</div>
							<div id="tabs" class='container'>
							<!--	<ul class="nav nav-tabs">
									<li >
										<a data-toggle="tab" href="#tabs_1">Черновики<span class="ui_count"></span></a>
									</li>
									<li class="active">
										<a data-toggle="tab" href="#tabs_2">Опубликованные<span class="ui_count"></span></a>
									</li>
								</ul>
							-->
								<ul>
									<li >
										<a href="#tabs_1">Черновики</a>
									</li>
									<li >
										<a href="#tabs_2">Опубликованные</a>
									</li>
								</ul>
							<!--  
							  <div class="fancy-content tab-content">
								<div class="tab-pane fade " id="tabs_1"><?//=$draft; ?></div>
								<div class="tab-pane fade in active" id="tabs_2"><?//=$publeshed; ?></div>
								
							  </div>
							-->
								<div class="fancy-content tab-content">
								<div  id="tabs_1"><?=$draft; ?></div>
								<div id="tabs_2"><?=$publeshed; ?></div>
							  </div>
							</div>
					</div>
        		</div>
			</div>
		</div>
		<div class="blog_ed_layer_content"></div>
	
<!-------------------- editor ------------------------------------------>

<div class="blog_editor">
	<hr>
	<div title="Свернуть редактор" data-action="close" class="mobile_controll mobile_controll_close"></div>
	<div title="Развернуть редактор" data-action="open" class="mobile_controll mobile_controll_open"></div>
	<div title="Панель управления" id="cr"></div>
	<div class="blog_editor_category">
	 <label id="ac-cat"  data-action="category" data-id="" class="ac-cat">Категория: 
		 </label><span class="selected_category"><?=$cats->title; ?></span>
	</div>
	<input class="input_blog_title" type="text" placeholder="Придумайте название..." >
<!--<hr>-->
</div>	
	
<div  class="standalone-container">
  	<div id="quill-container" class="ql-container ql-bubble"></div>
</div>	
	<div id="my_Images" title="Мои фото" style="display:none;"></div>	
</div> <!--wrap-->

<div id="blg_image_error" style="display:none">Размер фото превышает<br>1 Мб.</div>	
<div id="blg_preloader" style="display: none"></div>
<div id="blg_preloader_bkg" style="display: none"></div>
</div>
<div class="blgcr_list">
	<a href="#editModal" class="editor_modal" data-toggle="modal">Кабинет автора</a>
</div>
