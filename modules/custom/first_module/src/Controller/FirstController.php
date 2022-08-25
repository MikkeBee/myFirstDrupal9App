<?php 

namespace Drupal\first_module\Controller;

use Drupal\Core\Controller\ControllerBase;


class FirstController extends ControllerBase{

    public function first() {
        //return array('#markup' => 'Welcome to Drupal website');
        return ['#markup' => $this->t('Welcome to Drupal')];
    }
}