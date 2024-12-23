import React from "react";

function Period() {
  return (
    <select class="px-4 py-2 bg-white rounded-lg text-sm text-gray-600 border border-gray-200">
      <option value="7">7 days</option>
      <option value="14">14 days</option>
      <option value="30">30 days</option>
      <option value="90">90 days</option>
    </select>
  );
}

export default Period;
