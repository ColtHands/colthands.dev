<template>
    <div class="blog-post">
        <NuxtLink :to="props.post._path">
            <h3>{{props.post.title}}</h3>
        </NuxtLink>
        <p>{{props.post.description}}</p>
        <div>
            <NuxtLink :to="props.post._path">
                <UiButton text="go to post" />
            </NuxtLink>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { BlogPost } from '~~/utils/contentUtils'

type Props = {
    post: BlogPost
}
const props = defineProps<Props>()
</script>

<style lang="sass" scoped>
@use '~~/styles/variables'

.blog-post
    display: flex
    flex-direction: column
    justify-content: space-between
    h3
        letter-spacing: -1px
        font-size: 1.5rem
        line-height: 2rem
        font-weight: 700
    p
        @include variables.blogText
        margin: 10px 0
    a
        text-decoration: none
        display: inline-block
    div
        margin: 10px 0
        text-align: right
    button
        margin-left: auto
        display: block
</style>