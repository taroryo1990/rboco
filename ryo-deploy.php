<?

function homepage_deploy(){
    exec('/usr/local/bin/git -C /home/rboco/www/rboco pull', $op, $rv);
    print_r($op);
    print_r($rv);
    echo " homepage deploy\n";
}
echo $_GET['function'];
//if (cnt != 1) {
//	return;
//}
if($_GET['function'] == 'homepage'){
   homepage_deploy();
   echo "homepage OK";
}else{
	return;
}
?>
