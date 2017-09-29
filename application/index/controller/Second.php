<?php
/**
 * Created by PhpStorm.
 * User: 高笛淳
 * Date: 2017/8/16
 * Time: 11:15
 */

namespace app\index\controller;

use think\Controller;
class second extends Controller
{
    public function address(){
        return $this->view->fetch();
    }
}