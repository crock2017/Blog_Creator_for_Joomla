<?php
/**
 * @copyright	Copyright © 2018 - All rights reserved Crock.ltd
 * @license		GNU General Public License v2.0
 * March 2019 	crock@vodafone.de
 */
defined('_JEXEC') or die;


class modBlogcreatorcontentHelper {

	public static function getItems ($author, $catid){
		
		$languageTag = JFactory::getLanguage()->getTag();
        $query = "SELECT items.*
                    FROM #__content as items
                    WHERE (items.created_by = {$author}
                          AND items.language IN('{$languageTag}', '*')
                          )

                    AND (items.catid = {$catid}
                         )";

		$db = JFactory::getDbo();
		$db->setQuery($query);
		$list = $db->loadObjectList();
		return $list;
	}
	
	
	public static function getCategory ($author){
		
		$languageTag = JFactory::getLanguage()->getTag();
        $query = "SELECT category.title
                    FROM #__categories as category
                    WHERE (category.id = {$author}
                          AND category.language IN('{$languageTag}', '*')
                          AND category.published = 1)";

		$db = JFactory::getDbo();
		$db->setQuery($query);
		$list = $db->loadObjectList();
		return $list[0];
	}
/*	
	public static function getAllCategories(){
		$languageTag = JFactory::getLanguage()->getTag();
		$query = "SELECT categories.*
                    FROM #__epc_categories as categories

                    WHERE (categories.language IN('{$languageTag}', '*')
                          AND categories.state = 1)";

		$db = JFactory::getDbo();
		$db->setQuery($query);
		$AllCategories = $db->loadObjectList();
		return $AllCategories;
	} */
	//---------- edit item---------------
	public static function getitemAjax (){
		$id = $_POST['id'];
		$catid = $_POST['catid'];
		$user = JFactory::getUser();
		$userId = $user->id;
		$session = JFactory::getSession();
		$session->set("blog_'.$userId.'recentID",$id);
	
	
		
		$languageTag = JFactory::getLanguage()->getTag();
        $query = "SELECT items.*, categories.title as cat
                    FROM #__content as items
						
                    LEFT JOIN #__categories as categories
                    ON items.catid = categories.id

                    WHERE (items.id = {$id} AND categories.id = {$catid}
                          )
						  
"; 
		

		$db = JFactory::getDbo();
		$db->setQuery($query);
		$itemPost = $db->loadObjectList(); 
	/*	JLoader::import('joomla.application.component.model');
		JModelLegacy::addIncludePath(JPATH_SITE.'/components/com_content/models', 'ContentModel');
		$model = JModelLegacy::getInstance('Articles', 'ContentModel');
		$model->getState();
		$model->setState('filter.article_id', $id);
		$model->setState('filter.language', $languageTag);
		$model->setState('filter.category_id', $catid);
		$itemPost = $model->getItems(); */
		
								$res =	self::deletesessionsAjax('tempImgPathArray');
			if($res == true) {
				self::viewPrepare($itemPost); 
						
		return $itemPost;
			}else {
				return false;
			}
	}
	
	public static function deletesessionsAjax($_session_name=false) {
		$user = JFactory::getUser();
		$userId = $user->id;
		$input = Jfactory::getApplication()->input;
		$session = JFactory::getSession();
		if ($_session_name) {
			$session_name =  $_session_name;
		} else{  $session_name = $input->get('sessionName') ;
			  }
		$session->clear('blog'.$userId.$session_name);					
		return true;
	}
	
	public static function saveitemAjax (){
		if (version_compare(JVERSION, '3.0', 'lt')) {
			JTable::addIncludePath(JPATH_PLATFORM . 'joomla/database/table');
		}
		
		$input = Jfactory::getApplication()->input;
		$session = JFactory::getSession();
		$user = JFactory::getUser();
		$userId = $user->id;
		$catid = $input->get('catid','');
		$publ = $input->get('publ');
		$id = $input->get('id');
		
		$new_text = JComponentHelper::filterText($input->post->get('new_text', '', 'raw'));
		
		
		$title = $input->getString('title','');
		
		if(!isset($title) || $title == ''){
			$error = 'title';
			return $error;
		}
		
		$ImgPathArray = $session->get('blog'.$userId.'tempImgPathArray');
		
			if($ImgPathArray) {
				$session->clear('blog'.$userId.'tempImgPathArray'); // clear session
				$new_src = $ImgPathArray['img_Path'];
				if($ImgPathArray['img_Path_tmp'] !== $ImgPathArray['img_Path']) {
				rename($ImgPathArray['img_Path_tmp'], $ImgPathArray['img_Path']);
							}
			} else {
				$new_src = ''; // did not change image
			}
		
		if ($id !== 'new') {
			$article = JTable::getInstance('content');
			
			if($new_src){ // if image was changed
				$images = array(
					'image_intro'=>$new_src,
					"float_intro"=>"",
					"image_intro_alt"=>"",
					"image_intro_caption"=>"",
					"image_fulltext"=>"",
					"float_fulltext">"",
					"image_fulltext_alt"=>"",
					"image_fulltext_caption"=>""
					);
				$article->images = json_encode($images);
				}	
			$new_text = self::changeImageUrl($new_text);	// !!!!
			$fulltext = $new_text;
			$introtext = JHTML::_('string.truncate', $new_text, 100);;
		
		$article->id = (int)$id;
		$article->catid = (int)$catid;
		$article->title = $title;
		//$article->alias = $alias;
		$article->introtext = $introtext;
		$article->fulltext = $fulltext;
		$article->state = (int)$publ;
		//$article->created_by = $user->id;
		//$article->created = JFactory::getDate()->toSQL();
		$article->modified = JFactory::getDate()->toSQL();
		//$article->publish_up = JFactory::getDate()->toSQL();
		//$article->images = json_encode($images);
		//$article->access = 1;
		//$article->language = '*';
		$article->modified_by = $user->id;
			
		if(	$article->store(FALSE))
			{return true;	} else { 
				JError::raiseNotice(500, $article->getError());
			return $article->getError(); }	
		
		
		
			//------------------ new blog --------------
		} else {
			if (!isset($catid) || $catid == '') {
				$error = 'catid';
				return $error;
			}
			
				if(!$new_src){ // if new blog image was not inserted
					$new_src = 'modules/mod_blogcreatorcontent/assets/css/images/placeholder.png';
				}
			$store = self::newItem($user,$new_src, $new_text, $catid, $title,$publ);
			if ($store == 'true') {
			//$session->clear('blog'.$userId.'tempImgPathArray');
				
			return true;
			} else {
				$error = 'wrong';
				return $error;
				//return "Whoops something is wrong!!!!";
			}
		}
		
	}
		
	public static function editimgAjax (){ // ok!
	$session = JFactory::getSession();
	jimport('joomla.filesystem.folder');
	$user =JFactory::getUser();
	$userId = $user->id;
	if(!JFolder::exists("images/blog/tmp"))JFolder::create("images/blog/tmp");
	$tmp_path = 'images/blog/tmp';
	if(!JFolder::exists("images/blog/".$userId))JFolder::create("images/blog/".$userId);
	$post = isset($_POST) ? $_POST: array();	
	//$path = JPATH_SITE.'/images/blog/'.$userId;
	$path = 'images/blog/'.$userId;
	$valid_formats = array("jpg", "png", "gif", "jpeg", "JPEG","PNG","JPG","GIF");
	$name = $_FILES['file']['name'];
	//$size = $_FILES['file']['size'];
	if(strlen($name)) {
		list($txt, $ext) = explode(".", $name);
		$fi = finfo_open(FILEINFO_MIME_TYPE);
		if(in_array($ext, $valid_formats)){
			//$actual_image_name = 'blog'.time().'_'.$txt .'.'.$ext;
			$actual_image_name = $txt .'.'.$ext;
			$filePath = $path .'/'.$actual_image_name;
			$filePath_tmp = $tmp_path.'/'.$actual_image_name;
			$tmp = $_FILES['file']['tmp_name'];
		//***	
			$mime = (string) finfo_file($fi, $tmp);
				if	(strpos($mime, 'image') === false) {
					unlink($filePath);
					die('File is broken and deleted');	
				} 
		// ***	
			if(move_uploaded_file($tmp, $filePath_tmp)) {
			//$img_Path = JURI::base(true).'/images/blog/'.$userId.'/'.$actual_image_name;
			$img_Path = 'images/blog/'.$userId.'/'.$actual_image_name;
			$img_Path_tmp = 'images/blog/tmp/'.$actual_image_name;
				$img_path_array = [
					'img_Path'=>$img_Path,
					'img_Path_tmp'=>$img_Path_tmp
				];
						$session->set('blog'.$userId.'tempImgPathArray',$img_path_array);
				return 'ok';
			} else return 'faild';
		} else return 'invalid format';
		
	} else return 'No selected image';
		
	}

	public static function deleteitemAjax (){
		$id = $_POST['id'];
		$userId = $_POST['userId'];
		$db = JFactory::getDbo();
		$query = $db->getQuery(true);
		$conditions = array(
			$db->quoteName('id') . ' = '.$id );

		$query->delete($db->quoteName('#__content'));
		$query->where($conditions);

		$db->setQuery($query);
		$result = $db->execute();
		
		return $result;
		
		
	}
	
public static function newItem ($user,$new_src, $new_text, $catid, $title, $publ){

	$alias = self::stripString($title);
	//$escapers = array('"', "'");
	//$replacements = array('\"',  "\'");
	//$new_text = str_replace($escapers, $replacements, $new_text);
	$new_text = self::changeImageUrl($new_text);
	
	$images = array(
		'image_intro'=>$new_src,
		"float_intro"=>"",
		"image_intro_alt"=>"",
		"image_intro_caption"=>"",
		"image_fulltext"=>"",
		"float_fulltext">"",
		"image_fulltext_alt"=>"",
		"image_fulltext_caption"=>""
	);
	$fulltext = $new_text;
	$introtext = JHTML::_('string.truncate', $new_text, 100);
	
		$new_article = JTable::getInstance('content');
	
		$new_article->catid = (int)$catid;
		$new_article->title = $title;
		$new_article->alias = $alias; //JFilterOutput::stringURLSafe();
		$new_article->introtext = $introtext;
		$new_article->fulltext = $fulltext;
		$new_article->state = (int)$publ;
		$new_article->created_by = $user->id;
		$new_article->created = JFactory::getDate()->toSQL();
		$new_article->modified = JFactory::getDate()->toSQL();
		$new_article->publish_up = JFactory::getDate()->toSQL();
		$new_article->images = json_encode($images);
		$new_article->access = 1;
		$new_article->modified_by = $user->id;
		//$article->metadata = '{"page_title":"","author":"","robots":""}';
		$new_article->language = '*';
	
	
	
if(	$new_article->store(TRUE))
{return true;	} else { 
	JError::raiseNotice(500, $new_article->getError());
	return false; }
	
		
	}
	//--------------------------- doesn't use----------------------------
public static function deleterecentimageAjax(){
	$user  = JFactory::getUser();
    $userId  = (int)$user->id;
	$session = JFactory::getSession();
	$recent_img_path = $_POST['recent_img_path'];
	if($recent_img_path){
		$session->set('blog'.$userId.'recentimageDelete', $recent_img_path);
		//unlink($recent_img_path);
		return true;
	}
	return false;
}
	


 public static function stripString($string) {
	 $cyr = [
            'а','б','в','г','д','е','ё','ж','з','и','й','к','л','м','н','о','п',
            'р','с','т','у','ф','х','ц','ч','ш','щ','ъ','ы','ь','э','ю','я',
            'А','Б','В','Г','Д','Е','Ё','Ж','З','И','Й','К','Л','М','Н','О','П',
            'Р','С','Т','У','Ф','Х','Ц','Ч','Ш','Щ','Ъ','Ы','Ь','Э','Ю','Я'
        ];
        $lat = [
            'a','b','v','g','d','e','io','zh','z','i','y','k','l','m','n','o','p',
            'r','s','t','u','f','h','ts','ch','sh','sht','a','i','y','e','yu','ya',
            'A','B','V','G','D','E','Io','Zh','Z','I','Y','K','L','M','N','O','P',
            'R','S','T','U','F','H','Ts','Ch','Sh','Sht','A','I','Y','e','Yu','Ya'
        ];
	 $string = str_replace($cyr, $lat, $string); 
    
		return JFilterOutput::stringURLSafe($string);

    }
	
public static function writerImageUrl($image) {
	$return = array();
	$trigger = false;
	jimport('joomla.filesystem.folder');
	$user =JFactory::getUser();
	$userId = $user->id;
	$file = array();
	if(!JFolder::exists("images/blog/".$userId."/body"))JFolder::create("images/blog/".$userId."/body");
	$body_path = 'images/blog/'.$userId.'/body/';
	$valid_formats = array("jpg", "png", "gif", "jpeg", "JPEG","PNG","JPG","GIF");
	foreach($image as $i => $im) {
		$ext = explode(';', $im);
		$mime = explode('/',$ext[0])[0]; 
	if( $mime !== 'data:image' ){
		$file[$i] = 'exist';
		$trigger = true;
		continue;
	}
		$ext = explode('/',$ext[0])[1];
		if(!in_array($ext, $valid_formats)){
			$return[0] = false;
			$return[1] = '';
			$return[2] = $ext;//'wrong format'; //false
			return $return;
		}
	$img = str_replace('data:image/'.$ext.';base64,', '', $im);
	$img = str_replace(' ', '+', $img);
            $data = base64_decode($img);
            $file[$i] =  $body_path . uniqid() . '.'.$ext;
			$success = file_put_contents($file[$i], $data);
		if($success){
			$trigger = true;
		}else {$trigger = false;}
	}
	//$return[1]=$file; $return[0] = true;
	if ($trigger == true) {
		$return[1]=$file; 
		$return[0] = true;
	} else {
		$return[0] = false;
		$return[2]='trigger is wrong';
	}
	return $return;
	
}

public static function changeImageUrl($new_text) {
			preg_match_all('/\<img(.*?)[sS][rR][cC]\s*=\s*[\'\"]([^\'\"]+)[\'\"](.*?)\>/', $new_text, $output_array);
	
			if(array_key_exists(2,$output_array) && array_key_exists(0,$output_array[2]) && strlen($output_array[2][0] ) > 0 ){ // <img are existing
				$path = self::writerImageUrl($output_array[2]);
										//return json_encode($output_array);							
			if($path[0] == false){
				return json_encode($path);   //--- 0 return
				
			} else if(is_array($path[1])) {
				$html = new DOMDocument();
				$html->loadHTML('<?xml encoding="UTF-8">' .$new_text);	
				$path = $path[1];
				foreach($path as $i=>$src) {
					if($src == 'exist'){	// path is exists allready and should be remove preceding in src
						continue;
					} else { // all src should be changed
						$nodes = $html->getElementsByTagName('img');
						foreach( $nodes as $el){
							$nodes[$i]->setAttribute('src',$path[$i]);
						}
					}
				}
				$innerHTML = '';
				foreach ($html->getElementsByTagName('*') as $key=> $child) {
					if($child->nodeName == 'p' || $child->nodeName == 'iframe'){
						$innerHTML .= $html->saveHTML($child);
						}
					}
				$new_text = $innerHTML; 
						//--------------- src should be without preceding ----------
				self::savePrepare($new_text);
			}
		}
	return $new_text; 
}
	public static function myimagesAjax() {
	$user =JFactory::getUser();
	$userId = $user->id;
	$input = Jfactory::getApplication()->input;
	
	$direct = $input->getString('folder');
		switch($direct) {
			case 'root':
		$dir = 'images/blog/'.$userId;		
			break;
			case 'body':
		$dir = 'images/blog/'.$userId.'/body';		
			break;
		}
		
	//$dir = $input->getString('folder');
	$files = array();

	if(file_exists($dir)){
		foreach(scandir($dir) as $f) {
			if(!$f || $f[0] == '.') {
				continue; // Ignore hidden files
			}
			if(is_dir($dir . '/' . $f)) {
				$files[] = array(
					"name" => $f,
					"type" => "folder",
					"path" => $dir . '/' . $f,
					"items" => scandir($dir . '/' . $f) // Recursively get the contents of the folder
				);
			}	
			else {
				$files[] = array(
					"name" => $f,
					"type" => "file",
					"path" => $dir . '/' . $f,
					"size" => filesize($dir . '/' . $f) // Gets the size of this file
				);
			}
		}
	
	}
	return json_encode(array(
	"name" => $direct,
	"type" => "folder",
	"path" => $dir,
	"items" => $files
));
}

	public static function insertexistimagesessionAjax() {
		$input = Jfactory::getApplication()->input;
		$path = $input->getString('path');
		$session = JFactory::getSession();
		$user =JFactory::getUser();
		$userId = $user->id;
				$img_path_array = [
					'img_Path'=>$path,
					'img_Path_tmp'=>$path
				];
		$session->set('blog'.$userId.'tempImgPathArray',$img_path_array);
		return true;
	}
	
	public static function getSefPluginEnable(){
	$db = JFactory::getDBO();
    $query = $db->getQuery(true);
    $query
        ->select($db->quoteName('enabled'))
        ->from($db->quoteName('#__extensions'))
        ->where($db->quoteName('name')  .'LIKE'. $db->quote('plg_system_sef'));    
    $db->setQuery($query);
    $db->execute();
    if($db->getNumRows()){
        return $db->loadResult(); 
    }
    return false;
	}
	
	public static function viewPrepare(&$itemPost){
		$fulltext = $itemPost[0]->fulltext;
		$preceding = self::getSefPluginEnable();
			if($preceding){
				$preceding = ($preceding == 1)?'/':'';
				$html = new DOMDocument();
				$html->loadHTML('<?xml encoding="UTF-8">' .$fulltext);
				$tags = $html->getElementsByTagName('img');
				if (count($tags) > 0) {
					foreach($tags as $tag){
						$old_src = $tag->getAttribute('src');
						$new_src = $preceding.$old_src;
						$tag->setAttribute('src', $new_src);
						 }
					$innerHTML = '';
					foreach ($html->getElementsByTagName('*') as $key=> $child) {
						if($child->nodeName == 'p' || $child->nodeName == 'iframe'){
							$innerHTML .= $html->saveHTML($child);
									}
							}
					$itemPost[0]->fulltext = $innerHTML;
					 } else{return $itemPost;}
				} else {
					
					return $itemPost;
				}
	}
	public static function savePrepare(&$new_text){
		$html = new DOMDocument();
		$html->loadHTML('<?xml encoding="UTF-8">' .$new_text);
		$tags = $html->getElementsByTagName('img');
			if (count($tags) > 0) {
				foreach($tags as $tag){
					$old_src = $tag->getAttribute('src');
					$new_src = ltrim($old_src,'/');
					$tag->setAttribute('src', $new_src);
						 }
				$innerHTML = '';
					foreach ($html->getElementsByTagName('*') as $key=> $child) { 
						if($child->nodeName == 'p' || $child->nodeName == 'iframe'){
							$innerHTML .= $html->saveHTML($child);
									}
							}
				$new_text = $innerHTML;
			}else {
				return $new_text;
			}
	}
}