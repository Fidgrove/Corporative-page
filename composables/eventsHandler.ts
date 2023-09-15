import { onMounted, onBeforeUnmount } from "vue";

export const useScrollHandler = (el: Ref<HTMLElement | null>) => {
  const isHeaderOnTop: Ref<boolean> = ref(false);
  const handleScroll = () => {
    if (el.value) {
      const rect = el.value.getBoundingClientRect();
      isHeaderOnTop.value = rect.top <= 0 && rect.bottom >= 0;
    }
  };

  onMounted(() => {
    window.addEventListener("scroll", handleScroll);
  });

  onBeforeUnmount(() => {
    window.removeEventListener("scroll", handleScroll);
  });
  return {
    isHeaderOnTop,
  };
};
