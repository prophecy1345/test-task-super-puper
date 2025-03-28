<template>
  <div class="mb-4">
    <label :for="id" class="block text-gray-700 font-medium mb-2">
      {{ label }}
    </label>
    <input
      :id="id"
      :value="modelValue"
      @input="onInput"
      :type="type"
      class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      :class="{ 'border-red-500': error }"
      :placeholder="placeholder"
      :maxlength="getMaxLength()"
    />
    <p v-if="error" class="text-red-500 text-sm mt-1">{{ error }}</p>
    <p v-if="hint" class="text-gray-500 text-sm mt-1">{{ hint }}</p>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    id: {
      type: String,
      required: true
    },
    modelValue: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    },
    error: {
      type: String,
      default: ''
    },
    hint: {
      type: String,
      default: ''
    }
  })

  const emit = defineEmits(['update:modelValue'])

  function getMaxLength(): number | undefined {
    switch (props.id) {
      case 'cardNumber':
        return 19;
      case 'expiry':
        return 5;
      case 'cvc':
        return 3;
      default:
        return undefined;
    }
  }

  function formatCardNumber(value: string): string {
    const digits = value.replace(/\D/g, '')
    
    const trimmed = digits.substring(0, 16)
    
    let formatted = ''
    for (let i = 0; i < trimmed.length; i++) {
      if (i > 0 && i % 4 === 0) {
        formatted += ' '
      }
      formatted += trimmed[i]
    }
    
    return formatted
  }

  function formatExpiryDate(value: string): string {
    const digits = value.replace(/[^\d]/g, '')
    
    const trimmed = digits.substring(0, 4)
    
    if (trimmed.length > 2) {
      return `${trimmed.substring(0, 2)}/${trimmed.substring(2)}`
    } else {
      return trimmed
    }
  }

  function formatCVC(value: string): string {
    const digits = value.replace(/\D/g, '')
    
    return digits.substring(0, 3)
  }

  function onInput(event: Event): void {
    const target = event.target as HTMLInputElement
    let value = target.value
    let cursorPosition = target.selectionStart || 0
    let formattedValue = value
    let shouldUpdateCursor = false
    
    if (props.id === 'cardNumber') {
      const prevLen = value.length
      formattedValue = formatCardNumber(value)
      
      if (formattedValue.length !== prevLen) {
        const spacesBefore = (value.substring(0, cursorPosition).match(/ /g) || []).length
        
        const spacesAfter = (formattedValue.substring(0, cursorPosition).match(/ /g) || []).length
        
        cursorPosition += (spacesAfter - spacesBefore)
        shouldUpdateCursor = true
      }
      
      if (formattedValue !== value) {
        target.value = formattedValue
      }
    }
    else if (props.id === 'expiry') {
      const prevLen = value.length
      formattedValue = formatExpiryDate(value)
      
      if (formattedValue.length !== prevLen) {
        if (formattedValue.length > value.length && formattedValue.includes('/')) {
          cursorPosition += (formattedValue.length - value.length)
        }
        shouldUpdateCursor = true
      }
      
      if (formattedValue !== value) {
        target.value = formattedValue
      }
    }
    else if (props.id === 'cvc') {
      formattedValue = formatCVC(value)
      
      if (formattedValue !== value) {
        target.value = formattedValue
        if (formattedValue.length < value.length) {
          cursorPosition = Math.min(cursorPosition, formattedValue.length)
          shouldUpdateCursor = true
        }
      }
    }
    else if (target.type === 'password') {
      formattedValue = value.replace(/\s/g, '')
      
      if (formattedValue !== value) {
        target.value = formattedValue
      }
    }
    
    if (shouldUpdateCursor && target === document.activeElement) {
      setTimeout(() => {
        target.setSelectionRange(cursorPosition, cursorPosition)
      }, 0)
    }
    
    emit('update:modelValue', formattedValue)
  }
</script>
