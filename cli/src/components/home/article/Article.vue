<template>
  <Table border :columns="columns7" :data="data6"></Table>
</template>
<script>
  export default {
    data () {
      return {
        columns7: [
          {
            title: '编号',
            key: 'id',
            render: (h, params) => {
              return h('div', [
                h('Icon', {
                  props: {
                    type: 'person'
                  }
                }),
                h('strong', params.row.id)
              ]);
            }
          },
          {
            title: '标题',
            key: 'title'
          },
          {
            title: '点击数',
            key: 'clickCount'
          },
          {
            title: 'Action',
            key: 'action',
            width: 150,
            align: 'center',
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      this.show(params.index)
                    }
                  }
                }, 'View'),
                h('Button', {
                  props: {
                    type: 'error',
                    size: 'small'
                  },
                  on: {
                    click: () => {
                      this.remove(params.index)
                    }
                  }
                }, 'Delete')
              ]);
            }
          }
        ],
        data6: this.$store.state.articles
      }
    },
    methods: {
      show (index) {
        this.$Modal.info({
          title: 'Article Info',
          content: `编号：${this.data6[index].id}<br>标题：${this.data6[index].title}<br>点击数：${this.data6[index].clickCount}`
        })
      },
      remove (index) {
        this.data6.splice(index, 1);
      }
    }
  }
</script>
