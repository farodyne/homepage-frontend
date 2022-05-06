<script>
    import { BackendApi, settings } from '@/utils';

    export default {
        /**
         * Component parameters.
         */
        props: {
            // The type of the section to fetch albums for.
            type: {
                type: String,
                required: true
            }
        },

        async created() {
            try {
                this.section = await new BackendApi(settings).getSection(this.type);
            } catch (error) {
                console.error(`Failed to get section "${this.type}" from server.`);
            }
        }
    };
</script>

<template>
    <div>SECTION!!!</div>
</template>
