import { ElMenuItem, ElSubMenu } from 'element-plus'
import vIcon from '@/components/v-icon/index.vue'

export default defineComponent({
  name: 'menuItem',
  components: { ElMenuItem, vIcon, ElSubMenu },
  props: {
    menu: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const router = useRouter()

    const handleMenuItemClick = (e) => {
      // TODO 根据不同网址跳转，系统内，系统外，iframe 等
      router.push({ name: e.name })
    }

    return () => {
      if (props.menu.children && props.menu.children.length > 0) {
        return (
          <el-sub-menu
            index={props.menu.meta.title}
            onClick={() => handleMenuItemClick(props.menu)}
          >
            {{
              title: () => (
                <div class="flex items-center">
                  <v-icon class="mr-2" name={props.menu.meta.icon}></v-icon>
                  <span>{props.menu.meta.title}</span>
                </div>
              ),
              default: () =>
                props.menu.children.map((item) => (
                  <el-menu-item
                    key={item.meta.title}
                    onClick={() => handleMenuItemClick(item)}
                    index={item.meta.title}
                  >
                    {item.meta.title}
                  </el-menu-item>
                )),
            }}
          </el-sub-menu>
        )
      } else {
        return (
          <el-menu-item index={props.menu.meta.title}>
            <v-icon class="mr-2" name={props.menu.meta.icon}></v-icon>
            <span>{props.menu.meta.title}</span>
          </el-menu-item>
        )
      }
    }
  },
})
