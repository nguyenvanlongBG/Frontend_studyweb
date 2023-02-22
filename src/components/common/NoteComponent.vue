<template>
    <div class="container-note">
        <div class="container-inner">
            <div class="sticky-container">
                <div class="sticky-outer">
                    <div class="sticky">
                        <svg width="0" height="0">
                            <defs>
                                <clipPath id="stickyClip" clipPathUnits="objectBoundingBox">
                                    <path
                                        d="M 0 0 Q 0 0.69, 0.03 0.96 0.03 0.96, 1 0.96 Q 0.96 0.69, 0.96 0 0.96 0, 0 0"
                                        stroke-linejoin="round" stroke-linecap="square" />
                                </clipPath>
                            </defs>
                        </svg>
                        <div class="sticky-content">
                            <slot name="note"></slot>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "NoteComponent"
}
</script>
<style scoped>
/* Some positioning and ratios */
.sticky-container {
    /* max-width: 300px; */
    position: relative;
}

.sticky-outer {
    display: flex;
    padding-top: 92.5925926%;
    position: relative;

}

.sticky {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}

/* Shadow behind the sticky note */
.sticky:before {
    box-shadow: -2px 2px 15px 0 rgba(0, 0, 0, 0.5);
    background-color: rgba(0, 0, 0, 0.25);
    content: '';
    width: 90%;
    left: 5px;
    height: 100%;
    position: absolute;
    top: 20%;
}

/* The sticky note itself */
.sticky-content {
    background: linear-gradient(180deg,
            rgb(125, 224, 246) 0%,
            rgb(125, 224, 246) 12%,
            rgb(125, 224, 246) 75%,
            rgb(125, 224, 246) 100%);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    font-size: 1.25rem;
    font-size: 8px;
    clip-path: url(#stickyClip);
}


/* Position the sticky nicely, so it looks better */
html,
body {
    height: 100%;
    margin: 0;
}

.container-note {
    display: flex;
    justify-content: center;
    width: 100%;
}

.container-inner {
    width: 100%;
}

/* Add responsiveness */
@media screen and (min-width: 640px) {
    .sticky-content {
        /* font-size: 1.5rem; */
        font-size: 12px;
    }

    .container-inner {
        /* width: 50%; */
    }
}

@media screen and (min-width: 768px) {
    .sticky-content {
        /* font-size: 1.5rem; */
        font-size: 12px;
    }

    .container-inner {
        /* width: 50%; */
    }
}

@media screen and (min-width: 1024px) {
    .sticky-content {
        /* font-size: 1.875rem; */
        font-size: 12px;
    }

    .container-inner {
        /* width: 25%; */
    }
}
</style>