import { Story } from "@storybook/react";
import { Meta } from "@storybook/react/types-6-0";
import React from 'react';
import styled from 'styled-components';
import useCloudinary from '.'
import Button from '../../components/Button';

const b64Image = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAAAvCAYAAABe1bwWAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxMkEwRkYxMTA1RUUxMUUzOTkwODgwRUU1QTkwOENFMCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxMkEwRkYxMjA1RUUxMUUzOTkwODgwRUU1QTkwOENFMCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjBBRjk3RjA4MDVFRTExRTM5OTA4ODBFRTVBOTA4Q0UwIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjEyQTBGRjEwMDVFRTExRTM5OTA4ODBFRTVBOTA4Q0UwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+POcPHQAAAZtJREFUeNrs27FOwlAUBuDTG0w0DkZjlIdwcdPFkTipC7honBDeyKITxsHg5IQ66uLm4kuQWESTxoEEOEduG0lbJZFbqvf/kz8kLQH6pb09IeB4xTJ9yTa3wt3grnId+t/pc1vcR26NexPsUPpxlnvJbXL3uHkLUEgfY14fc1MbzMmOnH7CGXefEDHocg/ljClwD2ASRiwKSq8pyGiqArMFh0g2BWYZDpGsKBjERgEmSQYEgAHMJJKb5pvPrK/RfPWI1OLCyPbe6xv5bp26T892njFxKJ8firfJPmsvpTiUcfZhjQEMYAADGMwxk5tTxs1S4zR2expzjtEz5jcoP93mTc85RmFMziKm5xysMYABTPZh5O5h7LU7738XxnfPjRxAr90h/6RuFMbxiuX+tE7XpDklSLt0jDUGiy9gAAMYwKSU7+Yc03NKpmGS5pw05pRMzzG4lAADGMDYDPMChkg8gXmAQyT3AuPCIZKawNxxL2ARRixug8VXvhFqwISutEV4V/qg4e/od7jXNPxHhi1p6WPe5Za0BQ0EGABbVF9+vim/XAAAAABJRU5ErkJggg=='

const Wrapper = styled.div``

export default {
  title: "Hooks/useCloudinary"
} as Meta;

export const base64ImageUpload: Story = () => {
  const { uploadImage } = useCloudinary({
    uploadTag: 'storybook'
  })
  return <Wrapper>
  <Button size='x-small' theme='primary' onClick={() => {
    uploadImage(b64Image, (url) => {
      alert(url)
    })
  }}>Upload a b64 image</Button>
  </Wrapper>
}


