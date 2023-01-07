import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import Board from "../Board.vue";

describe("Board", () => {
  it("renders properly", () => {
    const wrapper = mount(Board, { props: {} });
    expect(wrapper.text()).toContain("");
  });
});
