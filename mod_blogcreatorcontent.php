<?php
/**
 * @copyright	Copyright © 2019 - All rights reserved. Andrey Crock
 * @license		GNU General Public License v2.0
 * @July 2019 crock@vodafone.de
 */
defined('_JEXEC') or die;

require_once __DIR__.'/helper.php';
$mode =0;
$path = JURI::base(true);
$app = JFactory::getApplication();
$menu = $app->getmenu();
$Itemid = $menu->getActive()->id;
$doc = JFactory::getDocument();
// Include assets
$doc->addStyleSheet(JURI::root()."modules/mod_blogcreatorcontent/assets/css/style.css");
$doc->addStyleSheet(JURI::root()."modules/mod_blogcreatorcontent/assets/css/dropzone.css");
$doc->addScript(JURI::root()."modules/mod_blogcreatorcontent/assets/js/dropzone.js");

$exists = 0;
$user = JFactory::getUser();
$groups = $user->get('groups');
$userId = $user->id;
//$bstrap = $params->get('bstrap');
//$width = $params->get("width");
//$pos = $module->position;
$selector = $params->get('selector');
$sef_enabled = (modBlogcreatorcontentHelper::getSefPluginEnable()) ? modBlogcreatorcontentHelper::getSefPluginEnable(): '0'; 
foreach($groups as $group){
	if($params->get('guest_usergroup')) {
		foreach ($params->get('guest_usergroup') as $group_exists){
		if ($group == $group_exists) $exists = 1;
				
}
	}
}

if ($exists == 1) {
/*	if($bstrap === '1') {
		$doc->addScript ("https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js");
	} */
	$doc->addScript(JURI::root()."modules/mod_blogcreatorcontent/assets/js/script.js");
	$catid = $params->get('com_category'); 
	$cats = modBlogcreatorcontentHelper::getCategory($catid); 
	$list = modBlogcreatorcontentHelper::getItems ($userId, $catid); 
	require JModuleHelper::getLayoutPath('mod_blogcreatorcontent', $params->get('layout', 'default'));
?>	
	<script>
	 jQuery(document).ready(function(){
	 jQuery('.blog_ed_layer div[title]').tooltip(); 
		 jQuery( "#tabs" ).tabs({ active: 1 }); // ui tabs
		  });
		// Global variables	
	var cashFile;
	var recentImg;
	var filename;
	var main_filename;
	var imgsrc = "<?php echo 'images/blog/'.$userId.'/'; ?>";
	var newPost = 0;
	var selected_catId = <?=$catid; ?>;
	var main_src;
	var ItemId = "<?php echo $Itemid; ?>";
	var url = "<?php echo JRoute::_(JURI::base().'index.php?option=com_ajx&module=blogcreatorcontent&Itemid='); ?>"+ItemId;
	var id;
	var catid;
	var userId = <?php echo $userId; ?>;
	var sef = <?=$sef_enabled; ?>;
	var selector = '<?=$selector; ?>';

</script>
<link href="https://cdn.quilljs.com/1.1.4/quill.bubble.css" rel="stylesheet">
<script src="modules/mod_blogcreatorcontent/assets/js/quill.js"></script>	
<script src="modules/mod_blogcreatorcontent/assets/js/image-resize.js"></script>
 <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>	
<script src="modules/mod_blogcreatorcontent/assets/js/jquery.ui.touch-punch.js"></script>
<script src="modules/mod_blogcreatorcontent/assets/js/image-drop.min.js"></script>
<script src="modules/mod_blogcreatorcontent/assets/js/image-resize-slider.js"></script>
<link rel="stylesheet" href="modules/mod_blogcreatorcontent/assets/css/rangeslider.css">
<?php
}