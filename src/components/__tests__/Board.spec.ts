import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import TileBoard from "../TileBoard.vue";

describe("TileBoard", () => {
  it("renders properly", () => {
    const wrapper = mount(TileBoard, { props: {} });
    expect(wrapper.text()).toContain("");
  });
});
