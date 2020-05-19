<template>
  <div>
    <div class="todo-list">
      <div class="menu p-2">
        <h2 class="mb-3">
          Categorias
          <box-icon
            @click="showChart?showChart=false:showChart=true"
            type="solid"
            color="red"
            size="sm"
            name="bar-chart-alt-2"
          ></box-icon>
        </h2>

        <div v-if="listTasks.length">
          <ul v-for="task in listTasks" :key="task.id">
            <li
              :id="task.id"
              :class="{activecategory:selectedCategory.id == task.id  }"
              @click="showItensCategory(task)"
            >{{task.name}}</li>
          </ul>
        </div>
        <div class="d-inline-flex">
          <div class="col-md-8">
            <input
              v-model="newCategory"
              class="form-control"
              type="text"
              placeholder="Nova Categoria"
            />
          </div>
          <button
            @click="newCategoryAction(newCategory);newCategory = ''"
            type="button"
            class="ml-0 d-flex btn-sm btn-primary waves-effect waves-light"
          >
            <box-icon type="regular" color="white" size="sm" name="book-add"></box-icon>
            <span class="mt-1 ml-3">Adicionar</span>
          </button>
        </div>
      </div>
      <div class="main-task">
        <div class="header">
          <h2>{{selectedCategory ? selectedCategory.name : '' }}</h2>
          <p
            v-if="selectedCategory.tasks"
          >{{selectedCategory.tasks && selectedCategory.tasks.length === 0 ? '' : `${selectedCategory.tasks.filter(task => task.done === false).length} tarefas não concluidas`}}</p>
        </div>
        <div
          class="list-tasks d-flex d-flex justify-content-between"
          v-for="task in selectedCategory.tasks"
          :key="task.id"
        >
          <div
            @click="doneTaskAction({id:task.id,title:task.title,done:true})"
            class="custom-control custom-checkbox mb-2"
          >
            <input type="checkbox" class="custom-control-input" :id="task.id" :checked="task.done" />
            <label class="custom-control-label" :for="task.id">{{task.title}}</label>
          </div>
          <div class="btn btn-white d-flex justify-content-end">
            <box-icon
              @click="updateTask(task)"
              class="mr-2"
              type="regular"
              color="green"
              size="sm"
              name="pencil"
            ></box-icon>
            <box-icon
              @click="removeTaskAction(task.id)"
              type="regular"
              color="red"
              size="sm"
              name="trash"
            ></box-icon>
          </div>
        </div>

        <div class="form-group row mt-3">
          <div class="col-md-9">
            <input
              v-model="newItem"
              @change="newItem.length==0?labelButton='Adicionar':'Editar'"
              class="form-control"
              type="text"
              placeholder="Nova Tarefa"
            />
          </div>
          <button
            @click="labelButton=='Editar'? updateTaskAction({id:itemEdit.id, title:newItem,category_id:itemEdit.category_id}) :newTask()"
            type="button"
            class="ml-5 d-flex btn-sm btn-primary waves-effect waves-light"
          >
            <box-icon type="regular" color="white" size="sm" name="message-add" animation="tada"></box-icon>
            <span class="mt-1 ml-3">{{labelButton}}</span>
          </button>
        </div>
      </div>
    </div>
    <transition name="slide-fade">
      <div v-if="showChart" class="chart d-flex justify-content-center">
        <chart></chart>
      </div>
    </transition>
  </div>
</template>

<script>
import "boxicons";
import chart from "./Chart";
import { mapState, mapActions } from "vuex";
export default {
  name: "TodoList",
  components: { chart },
  data() {
    return {
      newItem: null,
      labelButton: "Adicionar",
      itemEdit: null,
      newCategory: null,
      showChart: false,
      datasetChart: []
    };
  },
  computed: {
    ...mapState({ listTasks: state => state.taskList }),
    ...mapState({ selectedCategory: state => state.selectedCategory })
  },
  created() {
    this.taskListAction();
  },
  methods: {
    showItensCategory(task) {
      this.changeCategoryAction(task);
    },
    updateTask(task) {
      this.newItem = task.title;
      this.labelButton == "Editar"
        ? (this.labelButton = "Adicionar")
        : (this.labelButton = "Editar");
      this.itemEdit = task;
    },

    newTask() {
      if (this.selectedCategory == undefined)
        return alert(`Por favor adicione uma categoria`);
      this.selectedCategory.tasks.push({
        title: this.newItem
      });
      this.newTaskAction({
        title: this.newItem,
        category_id: this.selectedCategory.id
      });

      this.newItem = "";
    },
    ...mapActions([
      "taskListAction",
      "newTaskAction",
      "removeTaskAction",
      "updateTaskAction",
      "newCategoryAction",
      "changeCategoryAction",
      "doneTaskAction"
    ])
  },
  watch: {
    labelButton(oldVal, newVal) {
      if (newVal == "Editar") this.newItem = "";
    }
  }
};
</script>

<style scoped lang="scss">
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active em versões anteriores a 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

.todo-list {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.menu {
  flex: 0.3;
  text-align: left;
  h2 {
    color: white;
  }
  div {
    text-align: left;

    cursor: pointer;
    ul {
      list-style: circle;
      line-height: 1.7;
      color: white;
      margin-left: -8%;
    }
  }
}

.activecategory {
  font-weight: bold;
}

.main-task {
  flex: 0.51;
  .header {
    border-radius: 13px 13px 0px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #efedef;
    padding: 3%;
    h2 {
    }
    p {
      color: #333;
      font-size: 0.95em;
      font-weight: bold;
    }
  }
  .list-tasks {
    text-align: left;
    background-color: white;
    padding: 3%;
    align-items: center;

    .myinput {
      width: 17px;
      height: 17px;
      margin: 2px 0 2px 0;
      background: #ddd;
      border-radius: 100%;
      position: relative;
      -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
      -moz-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
    }
    span {
      margin-left: 2%;
      cursor: pointer;
    }
  }
}
.chart {
  display: flex;
  flex: 1;
}
</style>
