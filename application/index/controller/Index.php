<?php
namespace app\index\controller;

use think\Controller;
use think\Db;

class Index extends Controller
{
    public function index()
    {
        return $this->view->fetch();
    }

//    public function address(){
//        return $this->view->fetch();
//    }

    public function select(){


        $res = Db::name('goods')->select();

        $response['list'] = $res;

        $response['totalMoney'] = 18;

        $data = [
            'code' => '001',
            'result' => $response,
            'msg' => ''
        ];

        echo json_encode($data);
    }
}
