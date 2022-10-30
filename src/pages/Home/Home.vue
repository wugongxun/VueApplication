<template>
    <div>
        <TypeNav></TypeNav>
        <List></List>
        <Recommend></Recommend>
        <Rank></Rank>
        <Like></Like>
        <Floor v-for="floor in floorList" :key="floor.id" :floor="floor"></Floor>
        <Brand></Brand>
    </div>
</template>

<script>
import List from "@/pages/Home/List";
import Recommend from "@/pages/Home/Recommend";
import Rank from "@/pages/Home/Rank";
import Like from "@/pages/Home/Like";
import Floor from "@/pages/Home/Floor";
import Brand from "@/pages/Home/Brand";
import {mapActions, mapState} from "vuex";

export default {
    name: "Home",
    components: {List, Recommend, Rank, Like, Floor, Brand},
    computed: {
        ...mapState("home", ["floorList"])
    },
    methods: {
        ...mapActions("user", ["toUserInfo", "toLogout"])
    },
    async mounted() {
        this.$store.dispatch("home/floorList");
        if (localStorage.getItem("TOKEN")) {
            try {
                await this.toUserInfo();
            } catch (e) {
                this.toLogout();
            }
        }
    }
}
</script>

<style scoped>

</style>