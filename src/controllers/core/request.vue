<script>
export default {
  name: "RequestCore",
  data() {
    return {
      baseURL: "http://localhost:3000/",
    };
  },
  methods: {
    getRequest() {
      return this;
    },
    getPost(key) {
      return this;
    },
    getGet(key) {
      return this;
    },
    getRequest(key) {
      return this;
    },
    isGet() {
      return true;
    },
    isPost() {
      return true;
    },
    getRequestType() {
      return type;
    },
  },
};
</script>