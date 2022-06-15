import { Component, OnInit } from '@angular/core';
// import { stringify } from 'querystring';
// import { Stream } from 'stream';
declare var $: any;

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    // $("input[type='checkbox']").change(function() {
    //   if($(this).is(':checked')) {
    //     $(this).next('label').addClass('checked');
    //   } else {
    //      $(this).next('label').removeClass('checked');
    //   }
    //  });


    function updateCounterDisplay() {
      var count = $(".todo-container").length;
      $(".counter-display").text(count);
    }
    $(document).ready(function () {
      addListenerToAddTask();
      addListenerToDeleteAllTasks();
      addListenerToToggleAllTasks();
      as();
    });
    function addListenerToAddTask() {
      $(".ui.blue.button").click(function () {
        var valueTask = $(".input-task").val();
        if (!valueTask.trim()) {
          alert("Please, enter your text!");
          return false;
        }
        var containerTodo =
          "<div class='todo-container' style='height:36px'>  <input type='checkbox'><label>" +
          valueTask +
          "</label><button class='delete-task' style='float: right;	border: none'>Delete</button></div>";
        $(".todos-container").append(containerTodo);
        $(".input-task").val("");
        addListenerToDeleteTask();
        updateCounterDisplay();
        return true; 
      });
    }
    
    function addListenerToDeleteTask() {
      $(".delete-task").click(function () {
        $(this).parents(".todo-container").remove();
        updateCounterDisplay();
      });
    }
    
    function addListenerToDeleteAllTasks() {
      $(".delete-all-tasks").click(function () {
        $(".todos-container").empty();
        updateCounterDisplay();
      });
    }
    
    function addListenerToToggleAllTasks() {
      $(".toggle-all-tasks").click(function () {
        $(".todo-container > input[type=checkbox]").prop("checked", true);
      });
    }
    
    function as() {
      $(".all-tasks").click(function () {
        $(".todo-container > input[type=checkbox]").prop("checked", false);
      });
    }
    
    ////////////////////////////////////////
    
    $(".ui.green.button.all").click(function () {
      $.ajax({
        url: "assets/data.json",
        method: "get",
    
        success: function (response:any) {
          console.log(response);
          //
          for (let index = 0; index < response["tasks"].length; index++) {
            var checked = response["tasks"][index]["completed"];
            console.log(checked);
            var containerTodo =
              `<div class='todo-container' style='height:36px'>  <input type='checkbox' ${
                checked ? "checked=true" : ""
              }><label>` +
              response["tasks"][index]["description"] +
              "</label><button class='delete-task' style='float: right;	border: none'>Delete</button></div>";
            $(".todos-container").append(containerTodo);
            $(".input-task").val("");
            addListenerToDeleteTask();
            updateCounterDisplay();
          }
    
          $(".ui.green.button.all").click(function () {
            $(".todos-container").empty();
            updateCounterDisplay();
          });
    
          //
        },
      });
    });
  }



}
